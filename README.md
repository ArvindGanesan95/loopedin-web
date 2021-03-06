
# LoopedIn 

## Description

The project is a lightweight social network that attempts to solve some of the problems with existing social network platforms by cutting down on features that make existing social networks unhealthy. LoopedIn remodels the UX behind sharing a post or information to make it easier for users to retain their privacy. Each post has to be tied to who they want to share it with (kind of like Google+ and circles).

The engagement with a post is to be personal and organic. This means removing the idea of a ‘like’ button, and making a comment to a post as a personal message.

To keep our target app realistic, the features we will provide our:-
-   Post sharing
-   Private messaging

If you want to try it out, we are live at https://loopedin.site/.

## We will support:

-   User registration
-   User authentication
-   After a user logs in:-
    -   User can send a message to another user (using an id)
    -   User can view historical chat with another user
    -   User can view all posts shared to them by other users (newsfeed equivalent).
    -   User can respond to a post they see on the news feed. Response is taken to private chat. (Like whatsapp).
    -   User can create a loop of friends.
    -   User can edit/delete a loop.
    -   User can make a post and choose the loops they want to share the post with.
    -   User can view their own posts.
    -   User can edit/delete their own post.

## Terminology:-

-   **Loop:-**  A group (sort of like a mailing list) but visible only to the creator
-   **Post:-** A message shared from user to a Loop (only text for now, media sharing will be explored)
-   **Message:-** From user to user (traditional message)

## Checkpoint 1


The deliverables for checkpoint 1 will support a few functionalities via API and a few basic functionalities via UI.

**Functionalities supported via API only:-**

- [x]  Create/Read and Update a loop
- [x]  Send a message from one user to another
- [x]  Create a post
- [x]  Read posts shared to user
- [x]  Delete a post shared by the user.  
      
**Functionalities  supported via UI:-**
- [x]  Register user
- [x]  Login user

## Checkpoint 2

**New functionalities that will be supported via UI:-**
 - [x] Create/Read and Update a loop
 - [x] Create a post
 - [x] Send a message from one user to another (no socket/notification)
 - [x] Delete a post shared by the user.
 - [x] Messages accept plain text, with urls automatically converted into links (No other HTML is accepted in messages).
 - [x] Manage user's friends and loops


## Final checkpoint

**New functionalities that will be supported via UI:-**
-   [x] View news feed
-   [x] Reply to a post in the news feed
-   [x] Chat will use socket for instant messaging
-   [x] Deploying apps via GCP
    

## Specialization deliverables

 1. **Cloud**: Adding GCP libraries to app, Documentation of steps to structuring app to communicate with cloud
   environment. mongoDB atlas integrated with GCP.
 2. **DevOps**: A CI/CD pipeline for smooth deployment using Docker and Kubernetes.
 3. **FrontEnd**: A JS framework like React and explore styling frameworks Bootstrap/Material UI.
 4. **Security**: Implementing security features mentioned in the Security analysis. Additionally implemented are role-management, strong password security, configuring IAM roles in GCP, keeping secrets in secret store using GitHub actions.

#  Installation
  
**Prerequisites**:
1. Docker
2. Firebase account

**Setting up firebase credentials:**

Firebase used to authenticate our users and as a store for user credentials, you will need to create your own firebase account to create an independent build.

You will need to update 2 keys to link your firebase app to this project :-

1. **The public key**
	 Replace the firebaseConfig json in the file  ```client/src/firebase.js```
	
3. **The private key**
	Create a private key for your firebase app and add it in the file ```server/config/serviceAccountKey.json``` . *Do not check in this file into your branch.*
	
See [this](https://github.com/ckanich-classrooms/final-project-cookie-crumbs-1/blob/checkpoint_3/Screen%20Shot%202020-03-30%20at%204.17.22%20PM.png) for reference.


**Running the app**:

*If you want to just test the app with minimal setup*

In the home path of the project (final-project-cookie-crumbs-1/), run:- 

```bash
docker-compose build
docker-compose up
```
The app should run on http://localhost:3000/

*If you want to develop and test with your own mongodb setup in your local, with live reload of the react code*

In final-project-cookie-crumbs-1/client/
```bash
npm run install
npm run watch
```

In final-project-cookie-crumbs-1/server/
```bash
npm run install
npm run watch
```
The app should run on http://localhost:8080/

# References
- https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in-side
- https://itnext.io/firebase-login-functionality-from-scratch-with-react-redux-2bf316e5820f
- https://github.com/bradtraversy/devconnector_2.0
- https://www.youtube.com/watch?v=xm4LX5fJKZ8&list=PLcCp4mjO-z98WAu4sd0eVha1g-NMfzHZk


