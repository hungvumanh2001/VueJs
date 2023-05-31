<template>
  <div>
    <!-- <header-app ref="header" /> -->
    <teleport to="body">
      <base-modal
        v-if="isShowModal"
        title="This is the title from app component"
        content="This is the content modal"
        theme="wrong"
        @close="onToggleModal"
      >
        <template v-slot:header>
          <h3>This is the header</h3>
        </template>
        <template v-slot:body>
          <label for="">Name: </label>
          <input type="text" />
        </template>
        <template v-slot:footer>
          <button type="button" class="btn btn-primary">Save changes</button>
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="onToggleModal"
          >
            Close
          </button>
        </template>
      </base-modal>
    </teleport>
    <button @click="onToggleModal">Toggle modal</button>
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    // Header,
    BaseModal: Modal,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onToggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>
