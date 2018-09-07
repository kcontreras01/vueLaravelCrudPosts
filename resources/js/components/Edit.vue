<template id="post-edit">
    <div>
        <h3>Edit Post</h3>

        <form @submit.prevent="updatePost">
            <div class="form-group">
                <label for="edit-title">Title</label>
                <input type="text" class="form-control" id="edit-title" v-model="post.title" required>
                <p class="help-block">Help Text Here</p>
            </div>
            <div class="form-group">
                <label for="edit-body">Body</label>
                <textarea class="form-control" rows="10" v-model="post.body"></textarea>
                <p class="help-block">Help Text Here</p>
            </div>

            <button type="submit" class="btn btn-xs btn-primary">Update Post</button>
            <router-link class="btn btn-xs btn-warning" :to="'/'">Cancel</router-link>

        </form>


    </div>
</template>

<script>
    export default {
        name: "Edit",
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        created() {
            axios.get('http://localhost:8000/posts/' + this.$route.params.id + '/edit')
                .then(response => {
                    this.post = response.data
                })
        },
        methods: {
            updatePost() {
                axios.patch('http://localhost:8000/posts/' + this.$route.params.id, this.post)
                .then(response => {
                    this.$router.push({name: 'Listpost'})
                })
            }
        }
    }
</script>
