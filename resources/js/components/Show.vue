<template id="post">
    <div>
        <h3>Title: {{post.title}}</h3>

        <div>
            <h4>Body: </h4>
            {{ post.body }}
        </div>
        <span class="glyphicon glyphicon-arrow-left"></span>
        <router-link :to="'/'">Back to Post List</router-link>
    </div>
</template>

<script>
    export default {
        name: "Show",
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        created() {
            axios.get('http://localhost:8000/posts/' + this.$route.params.id)
                .then(response => { this.post = response.data})
        }
    }
</script>
