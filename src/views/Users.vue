<template>
  <div class="users">
    <v-container>
      <v-row>
        <v-col cols="12" sm="10" offset-sm="1">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>about</th>
                <th>email</th>
                <th>gender</th>
                <th>name</th>
                <th>reference</th>
                <th>terms</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item of items" :key="item['.key']">
                <td>{{item.about}}</td>
                <td>{{item.email}}</td>
                <td>{{item.gender}}</td>
                <td>{{item.name}}</td>
                <td>{{item.reference}}</td>
                <td>{{item.terms}}</td>
                <td>
                  <div v-if="currentlyEditing !== item.id">
                    <v-btn color="primary" @click="editTodo(item)">
                      <i class="mdi mdi-pen"></i>
                    </v-btn>

                    <v-btn color="error" @click="deleteTodo(item)">
                      <i class="mdi mdi-delete-forever-outline"></i>
                    </v-btn>
                  </div>

                  <form v-else class="edit-todo-form">
                    <label class="edit-todo-label">
                      Edit:
                      <input type="text" v-model="aboutEditText" class="edit-todo-input">
                    </label>

                    <button 
                      type="submit" 
                      class="edit-todo-button"
                      @click.prevent="updateTodoText()">
                      Save
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import db from '../config/db';
import { itemsCollection } from '../firebase';

export default {
  name: 'users',
  data() {
    return {
      items: [],
      currentlyEditing: null,
      aboutEditText: ''
    }
  },
  firestore() {
    return {
      items: itemsCollection
    }
  },
  methods: {
    deleteTodo(item) {
      itemsCollection.doc(item.id).delete();
    },
    editTodo(item) {
      this.currentlyEditing = item.id
      this.aboutEditText = item.about
    },
    updateTodoText(item) {
      itemsCollection.doc(this.currentlyEditing).update({
        about: this.aboutEditText
      })
      .then(function(docRef) {
        console.log("Updated document text with ID: ", item.id);
      })
      .catch(function(error) {
        console.error("Error updating document text: ", error);
      });
      this.currentlyEditing = null;
      this.todoEditText = '';
    }
  }
}
</script>





