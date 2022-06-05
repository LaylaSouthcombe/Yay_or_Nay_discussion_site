const db = connect("mongodb://localhost:27017/yayornay")

db.posts.drop()

db.posts.insertMany([
    { title: "Post 1", body: "Is this good?", author: "Me", url: "aiunsd", topic: "TV", interactions: { thumbs_up: 0, thumbs_down: 0, meh: 0 }, comments: [], date: "Sat Jun 04 2022 15:45:30 GMT+0100 (British Summer Time)"},
    { title: "Post 2", body: "Nah, pants", author: "Myself", url: "dfgsdhdh", topic: "Movies", interactions: { thumbs_up: 0, thumbs_down: 0, meh: 0 }, comments: [], date: "Thur Jun 02 2022 15:45:30 GMT+0100 (British Summer Time)"},
    { title: "Post 3", body: "What about this?", author: "And", url: "sddfhfgh", topic: "Music", interactions: { thumbs_up: 0, thumbs_down: 0, meh: 0 }, comments: [], date: "Fri Jun 03 2022 15:45:30 GMT+0100 (British Summer Time)"},
    { title: "Post 4", body: "Rubbish also", author: "I", url: "gfdhfgj", topic: "Food", interactions: { thumbs_up: 0, thumbs_down: 0, meh: 0 }, comments: ['great', 'wonderful'], date: "Sun Jun 05 2022 15:45:30 GMT+0100 (British Summer Time)"}
])
