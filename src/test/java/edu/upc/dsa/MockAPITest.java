package edu.upc.dsa;

import edu.upc.dsa.models.Exceptions.*;
import edu.upc.dsa.models.Users.User;
import edu.upc.dsa.models.Users.UserLogin;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class MockAPITest {
    private MockAPI ma;

    @Before
    public void setUp() throws Exception {
        this.ma = MockAPIImpl.getInstance();

        this.ma.addUser("jota","1234","Jordi","SC","mail1",21);
        this.ma.addUser("eric","4321","Eric","JB","mail2",21);


        this.ma.addObjectStore("botas");
    }

    @After
    public void tearDown() {
        this.ma.clear();
    }

    @Test
    public void testAddUser() throws ExistantUserException {
        this.ma.addUser("guido","2222","Guido","Guido","mail3",21);
        Assert.assertEquals(3, this.ma.sizeUsers());
    }

    @Test
    public void testGetUserLogin() throws UserNotFoundException, PasswordNotMatchException {
        UserLogin u = this.ma.getUserLogin("jordi", "1111");
        Assert.assertEquals("jota", u.getUsername());
    }

    @Test(expected = UserNotFoundException.class)
    public void testGetUserNotFound() throws Exception {
        this.ma.getUser("null", "null");
    }

    @Test(expected = ExistantUserException.class)
    public void testAddExistingUser() throws Exception {
        this.ma.addUser("jota","1234","Jordi","SC","mail1",21);
    }

    @Test(expected = PasswordNotMatchException.class)
    public void testGetUserPasswordNotMatch() throws Exception {
        this.ma.getUser("jota", "null");
    }
    @Test
    public void testAddObjectToStore() throws ObjectExists {
        this.ma.addObjectStore("saco");
        Assert.assertEquals(2, this.ma.sizeStore());
    }
    @Test
    public void testBuyObject() throws ObjectNotExist, UserNotFoundException, PasswordNotMatchException {
        this.ma.buyObject("saco","jota");
        User user = this.ma.getUser("jota","1234");
        Assert.assertEquals(1,user.size());

    }

}

