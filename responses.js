[
  {
    body: "What packages we need for building CRUD from scratch?",
    title: "Express App and connect it to MongoDB."
  },

  {
    ques: "Why do we download the body-purser module?",
    answe: "It used to parse JSON btw client side and server side."
  },
  {
    ques: "Why we need Express?",
    answe: "It used for routing."
  },
  {
    ques: "Why we need MongoDB?",
    answe: "To connect our DB."
  },
  {
    ques: "Why we install a path module?",
    answe: "To serve a static HTML file to the user."
  },
  {
    ques: "Why do we need body-parses?",
    answe:
      "In order to read HTTP POST Data, it’s a piece of express middleware that reads a form’s input and sores it as a JS object"
  },
  {
    ques:
      "What’s the three important call functions that must be include in our code?",
    answe: "- Connect method. - Get the primary key.- Get the DB."
  },

  {
    title: "How can we insert data to MongoDB?",
    body: "By the console typing “inset”."
  },
  {
    title: "What is the function / route for the update method?",
    body: "app.put() , “the primary key is the ID”."
  },
  {
    title: "In postman, what kind of req is “update”?",
    body: "PUT."
  },
  {
    title: "What’s the main functions in the update method?",
    body:
      "Calling data (by ID).Return data(documents “user input”.I don't want the original docs so, i write a call back function and if there’s no errors it will send the data in JSON to the user."
  },
  {
    title: "In postman, what kind of req is “create”?",
    body: "POST"
  },
  {
    title: "What is the most important var in “ CREATE”?",
    body: "Request the user’s input and the database connections."
  },
  {
    title:
      "In this section, and in our call back function, what’s the differences btw result & result.ops[0]?",
    body:
      "Result: it shows the properties: n: number of data inserted, ok: if there’s errors.Result.ops[0]: (documents) the data we sent."
  },
  {
    title: "In postman, what kind of req is “delete”?",
    body: "Delete."
  },
  {
    title: "What is the most important var in “ Delete”?",
    body:
      "Req the input ID, database (collection) the we have to use “findOne” function."
  },
  {
    title: "How can we test the delete method?",
    body:
      "By postman, we copy the ID for the data we want to delete, then paste it in the path for the delete request."
  },
  {
    title: "Why do we make a unique id for the form, for example?",
    body:
      "Because we want to prevent the default response when the user submit."
  },
  {
    title:
      "In HTML file, where we write the script, what's the importance of writing “building IDS” function?",
    body: "Because we call the data by their ids."
  },
  {
    title:
      "What’s the important properties that should be included in this function?",
    body: "Edit, delete, list (unordered)..etc"
  },
  {
    title:
      "What’s the advantages of writing a function for building a template in the HTML file?",
    body:
      "It builds the list items that we want to build in our unordered list."
  },
  {
    title: "In which part of our code we write the buttons codes?",
    body: "In the build template part."
  },
  {
    title: "What does the function “get” include?",
    body: "The display data that we’ve wrote it before."
  },
  {
    title:
      "What is the parameters for the deleteTodo function? And their uses? ",
    body:
      "1- todo : the doc we want to delete.2- listItemID : the list.3- DeleteID : The ID for the button."
  },
  {
    title: "What is HTTP?",
    body: "Hyper text transfer protocol."
  },
  {
    title: "What is REST?",
    body:
      "Representational state transfer: architectural pattern with design guideline."
  },
  {
    title: "What is an API?",
    body:
      "Application Programming Interface: defines server side function that are supported and where the request should made."
  },
  {
    title: "What is express?",
    body:
      "Is a NPM package (web server), it takes all the nodeJS HTTP classes and added layer to the top of it and it allows you to communicate with RESTful endpoints."
  },
  {
    title: "Why do we use public folder?",
    body:
      "Because this is where we are going to store static resources like: HTML, CSS, Images... "
  },
  {
    title: "What is the way to serve static content?",
    body:
      "Via a function called express.staticapp.use() => “called also a middelware ”(app.user(express)static(‘public’))"
  },
  {
    title: "What is the mean of :name, in the route path?",
    body:
      "Additional sub route that can be map to a variable and it called params."
  },
  {
    title: "What is the advantage of using backslash ` ? ",
    body: "It tell us we are calling a variable.  "
  },
  ,
  {
    _id: "5cfbffb8e06f3b3560afa3ff",
    title: "What is a GIT?",
    body:
      "Version Control System (VCS) for tracking changes in computer file/ it stores files",
    created_at: "2019-06-08T18:34:32.209Z",
    __v: 0
  },
  {
    _id: "5cfc0036e06f3b3560afa400",
    title: "Whats the concepts of GIT?",
    body: "1- keep track of code history 2- take (snapshots) of your files",
    created_at: "2019-06-08T18:36:38.201Z",
    __v: 0
  },
  {
    _id: "5cfc00bbf5f4d833ac50a56f",
    title: "Whats the use of $ git init?",
    body:
      "initilize local git repository, it will create a .git folder in the project, we don't have to use this folder",
    created_at: "2019-06-08T18:38:51.606Z",
    __v: 0
  },
  {
    _id: "5cfc0103f5f4d833ac50a570",
    title: "Whats the use of $ git add <file>?",
    body: "add files that i specify to the staging area",
    created_at: "2019-06-08T18:40:03.456Z",
    __v: 0
  },
  {
    _id: "5cfc0136f5f4d833ac50a571",
    title: "Whats the use of $ git status?",
    body: "To see what i have in staging area",
    created_at: "2019-06-08T18:40:54.531Z",
    __v: 0
  },
  {
    _id: "5cfc015ef5f4d833ac50a572",
    title: "Whats the use of $ git commit?",
    body: "commit the changes in the index",
    created_at: "2019-06-08T18:41:34.350Z",
    __v: 0
  },
  {
    _id: "5cfc0197f5f4d833ac50a573",
    title: "Whats the use of $ git push?",
    body: "push to remote repository (like github)",
    created_at: "2019-06-08T18:42:31.881Z",
    __v: 0
  },
  {
    _id: "5cfc01b8f5f4d833ac50a574",
    title: "Whats the use of $ git pull?",
    body: "pull latest from remote repository",
    created_at: "2019-06-08T18:43:04.923Z",
    __v: 0
  },
  {
    _id: "5cfc01e7f5f4d833ac50a575",
    title: "Whats the use of $ git clone?",
    body: "copy / clone repository into a new directory",
    created_at: "2019-06-08T18:43:51.513Z",
    __v: 0
  },
  {
    _id: "5cfc0243f5f4d833ac50a576",
    title: "How to check about  existing of any file?",
    body: "by writing : $ git status",
    created_at: "2019-06-08T18:45:23.843Z",
    __v: 0
  },
  {
    _id: "5cfc0299f5f4d833ac50a577",
    title: "How to remove files from staging area?",
    body: "by $ git rm",
    created_at: "2019-06-08T18:46:49.742Z",
    __v: 0
  },
  {
    _id: "5cfc02d9f5f4d833ac50a578",
    title: "What is ( git add *.html ) is used for?",
    body: "put all the html files in the staging area",
    created_at: "2019-06-08T18:47:53.642Z",
    __v: 0
  },
  {
    _id: "5cfc0304f5f4d833ac50a579",
    title: "How to add all files in staging area?",
    body: "$ git add.",
    created_at: "2019-06-08T18:48:36.130Z",
    __v: 0
  },
  {
    _id: "5cfc03a83b36cd206c35f0f2",
    title:
      "After adding a file in stage area, then go and edit some contents of the file, it will be put out of stagging area, why?",
    body: "this is the way git works, we have to add it again",
    created_at: "2019-06-08T18:51:20.896Z",
    __v: 0
  },
  {
    _id: "5cfc03db3b36cd206c35f0f3",
    title: "How to create new file in out project?",
    body: "$ touch (the name of the file)",
    created_at: "2019-06-08T18:52:11.895Z",
    __v: 0
  },
  {
    _id: "5cfc04153b36cd206c35f0f4",
    title: "Whats the next step after creating new file?",
    body: "$ git init, to initilize the folder as git repository",
    created_at: "2019-06-08T18:53:09.522Z",
    __v: 0
  },
  {
    _id: "5cfc04993b36cd206c35f0f5",
    title: "How to add an email, name to git?",
    body: "$ git config --global user.name'---', user.email'---' ",
    created_at: "2019-06-08T18:55:21.513Z",
    __v: 0
  },
  {
    _id: "5cfc05063b36cd206c35f0f6",
    title:
      " While we are doing a commit by % git commit, how to start type on it?",
    body: "By clicking I , to go to insert mode",
    created_at: "2019-06-08T18:57:10.261Z",
    __v: 0
  },
  {
    _id: "5cfc053b3b36cd206c35f0f7",
    title: "whats the mean of # sign?",
    body: "its a comment",
    created_at: "2019-06-08T18:58:03.254Z",
    __v: 0
  },
  {
    _id: "5cfc057a3b36cd206c35f0f8",
    title: "How to get out of the insert mode?",
    body: "by click escape which will get us out of insert mode",
    created_at: "2019-06-08T18:59:06.428Z",
    __v: 0
  },
  {
    _id: "5cfc06033b36cd206c35f0f9",
    title: "whats the next step after insert mode?",
    body:
      ":wq then press enter, and the files commits and it will show us how many files changesvand give us the file names",
    created_at: "2019-06-08T19:01:23.956Z",
    __v: 0
  },
  {
    _id: "5cfc0a7dee8a273338a63811",
    title: "After commiting the files, what will status show?",
    body: "nothing",
    created_at: "2019-06-08T19:20:29.154Z",
    __v: 0
  },
  {
    _id: "5cfc0b8dee8a273338a63812",
    title: "How to use git ignore? and what is this file ?",
    body:
      " $ git touch . getignore , this is the file that we include the files or folders that we don't want to include in our repository at all, even if we do get add. ",
    created_at: "2019-06-08T19:25:01.258Z",
    __v: 0
  },
  {
    _id: "5cfc0c2fee8a273338a63813",
    title:
      "if we added another file we want to ignore, and add this file in the .gitagnore folder , what files will show if we call the status?",
    body:
      " only the .gitingnore folder will show, nothing inside it wil appear",
    created_at: "2019-06-08T19:27:43.448Z",
    __v: 0
  },
  {
    _id: "5cfc17b7ee8a273338a63814",
    title: "Whats the importance of the branch?",
    body:
      "we can use it to switch btw them so we can edit and do all the functionality without changing the main code.",
    created_at: "2019-06-08T20:16:55.171Z",
    __v: 0
  },
  {
    _id: "5cfc17eaee8a273338a63815",
    title: "How to create the branch?",
    body: "$ git branch (--) ",
    created_at: "2019-06-08T20:17:46.505Z",
    __v: 0
  },
  {
    _id: "5cfc1832ee8a273338a63816",
    title: "How to change us to the branch?",
    body: "$ check out (---)",
    created_at: "2019-06-08T20:18:58.832Z",
    __v: 0
  },
  {
    _id: "5cfc1974ee8a273338a63817",
    title: "What will happen when we create files in the new file?",
    body: "if we switched back to MASTER, the new files won't show",
    created_at: "2019-06-08T20:24:20.345Z",
    __v: 0
  },
  {
    _id: "5cfc19e0ee8a273338a63818",
    title:
      "in case to save the all branches's work, what should we do and how?",
    body:
      "while we are in the master branch , $ git merge --- (the new branch) ",
    created_at: "2019-06-08T20:26:08.232Z",
    __v: 0
  }
];
