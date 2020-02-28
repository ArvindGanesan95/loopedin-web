describe('application', async () => {
  describe('sanity', async () => {
    it('can successfully send an index', async () => {});

    it("doesn't send files that don't exist", async () => {});

    it('sends the raw index.html', async () => {});
  });

  describe('unauthenticated state', async () => {
    describe('registration', async () => {
      describe('user attempts to register with invalid credentials', async () => {
        it('duplicate user name (not allowed)', async () => {});
        it('incorrect user name (not allowed)', async () => {});
        it('weak password (not allowed)', async () => {});
      });

      it('user registers with sufficient information ', async () => {});
    });

    describe('login', async () => {
      it('user attempts to login with incorrect password (not allowed)', async () => {});
      it('user logs in with correct password', async () => {});
    });
  });

  describe('authenticated state', async () => {
    describe('Managing friends and loops', async () => {
      it('Add a user who is missing (not allowed)', async () => {});
      it('Add a user as a friend ', async () => {});
      it('Create a loop ', async () => {});
      it('Create a loop with a duplicate name (not allowed)', async () => {});
      it("Update a loop's name to a duplicate name (not allowed)", async () => {});
      it('Add a friend to a loop ', async () => {});
      it('Remove a friend from a loop ', async () => {});
    });

    describe('Private messages', async () => {
      it('Send a message to a user ', async () => {});
      it('Recieve messages from other users ', async () => {});
      it('Read chat history with a user ', async () => {});
    });

    describe('Post sharing', async () => {
      it(' Create a post and share with a list of loops', async () => {});
      it('Incorrect loop names in above request (not allowed)', async () => {});
      it('User views their own posts ', async () => {});
      it('User deletes their post', async () => {});
    });

    describe('Feed', async () => {
      it('User reads all posts shared to them', async () => {});
      it('User replies to a post shared to them', async () => {});
    });
  });
});