const Students = {
    Name : " Vaishnavi",
    Age : 22,
    Marks : 87
}

// Object Literals with an array value is added in it

const item ={
    Price: 280,
    Discount: 30,
    colors : ["red", "yellow"]
}

///////////Get Values and Add/Update and delete operations ///////////////////////

// Post
// {Username: '@VAISHNAVIJANGAM', Content: 'This is my #1st Post', Likes: 623, Reposts: 234, Tags: 43}
// Post["Content"]
    
// 'This is my #1st Post'
// Post[Content]
// VM119:1 Uncaught ReferenceError: Content is not defined
//     at <anonymous>:1:6
// (anonymous) @ VM119:1Understand this error
// Post.gender
// undefined
// Post.gender = "Female"
// 'Female'
// Post.gender
// 'Female'
// Post
// {Username: '@VAISHNAVIJANGAM', Content: 'This is my #1st Post', Likes: 623, Reposts: 234, Tags: 43, …}Content: "This is my #1st Post"Likes: 623Reposts: 234Tags: 43Username: "@VAISHNAVIJANGAM"gender: "Female"[[Prototype]]: Object
// Post.Us
// undefined
// Post.Username = "Vaishu"
// 'Vaishu'
// Post
// {Username: 'Vaishu', Content: 'This is my #1st Post', Likes: 623, Reposts: 234, Tags: 43, …}
// Post.Tags = "A"
// 'A'
// Post
// {Username: 'Vaishu', Content: 'This is my #1st Post', Likes: 623, Reposts: 234, Tags: 'A', …}
// delete Post.gender
// true
// Post
// {Username: 'Vaishu', Content: 'This is my #1st Post', Likes: 623, Reposts: 234, Tags: 'A'}