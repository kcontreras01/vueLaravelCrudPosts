<template id="post-list">
    <div class="row">
        <div class="pull-right">
            <router-link class="btn btn-xs btn-primary" :to="{name: 'Add'}">
                <span class="glyphicon glyphicon-plus"></span>
                Add New Post
            </router-link>
        </div>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Body</th>
                <th class="col-md-2">Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(post, index) in filteredPosts">
                    <td>{{index + 1}}</td>
                    <td class="w-25">{{ post.title }}</td>
                    <td class="w-25">{{ post.body }}</td>
                    <td>
                        <router-link class="btn btn-info btn-xs" :to="{name: 'Show', params: {id: post.id}}">Show</router-link>
                        <router-link class="btn btn-warning btn-xs" :to="{name: 'Edit', params: {id: post.id}}">Edit</router-link>
                        <router-link class="btn btn-danger btn-xs" :to="{name: 'Delete', params: {id: post.id}}">Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                posts: ''
            }
        },
        created() {
            let uri = 'http://localhost:8000/posts';
            axios.get(uri).then(response => {
                this.posts = response.data
            })
        },
        computed: {
            filteredPosts() {
                if(this.posts.length) {
                    return this.posts
                }
            }
        }
    }
</script>
