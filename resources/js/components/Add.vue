<template id="add-post">
    <div>
        <h3>Add New Post</h3>

        <form @submit.prevent="createPost">
            <div class="form-group">
                <label for="add-title">Title</label>
                <input type="text" class="form-control" id="add-title" v-model="post.title" required>
                <p class="help-block">Help Text Here</p>
            </div>
            <div class="form-group">
                <label for="add-body">Body</label>
                <textarea class="form-control" rows="10" v-model="post.body"></textarea>
                <p class="help-block">Help Text Here</p>
            </div>

            <button type="submit" class="btn btn-xs btn-primary">Create Post</button>
            <router-link class="btn btn-xs btn-warning" :to="'/'">Cancel</router-link>

        </form>


    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                axios.post('http://localhost:8000/posts', this.post)
                    .then(() => {
                        this.$router.push({name: 'Listpost'})
                    })
            }
        }
    }
</script>
