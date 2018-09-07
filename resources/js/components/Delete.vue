<template id="post-delete">
    <div>
        <h3>Delete post {{post.title}}</h3>
        <form @submit.prevent="deletePost">
            <p>The action cannot be undone</p>
            <button type="submit" class="btn btn-xs btn-danger">Delete</button>
            <router-link class="btn btn-xs btn-primary" :to="'/'">Back</router-link> 
        </form>
    </div>
</template>

<script>
    export default {
        name: "Delete",
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
            deletePost() {
                axios.delete('http://localhost:8000/posts/' + this.$route.params.id, this.post)
                .then(response => {
                    this.$router.push({name: 'Listpost'})
                })
            }
        }
    }
</script>