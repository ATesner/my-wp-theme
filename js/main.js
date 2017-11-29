// var j = jQuery;

// var Posts = React.createClass({
//     getInitialState() { return { posts: [] } },
//     componentWillMount() {

//         var state = this
//         j.ajax(React_Theme_Resource.url + '/wp-json/wp/v2/posts')
//         .done(function(data){
//             console.log('DONE', data)
//             state.setState({ posts: data })
//         })
//         .fail(function(){
//             console.log('FAIL')
//         })
//         .always(function(){
//             console.log('ALWAYS')
//         })
//     },
//     render() {
//         var posts = (this.state.posts) ;
//         return (
//             <div>
//                 { 
//                     posts.map(function(post){ 
//                         return <Post post={post} key={post.id} /> 
//                     }) 
//                 }
//             </div>
//         )
//     }
// })

// var Post = React.createClass({
//     render() {
//         var post = this.props.post
//         return (
//             <div>
//                 <center>
//                     <h3>{post.title.rendered}</h3>
//                     { post.content.rendered }     
//                 </center>
//             </div>
//         )
//     }
// })

// ReactDOM.render(<Posts/>, document.getElementById('content_space'))