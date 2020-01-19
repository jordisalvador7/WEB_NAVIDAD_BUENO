package edu.upc.dsa.services;

import edu.upc.dsa.MockAPI;
import edu.upc.dsa.MockAPIImpl;
import edu.upc.dsa.models.*;
import edu.upc.dsa.models.Exceptions.ExistantUserException;
import edu.upc.dsa.models.Exceptions.ObjectNotExist;
import edu.upc.dsa.models.Exceptions.PasswordNotMatchException;
import edu.upc.dsa.models.Exceptions.UserNotFoundException;
import edu.upc.dsa.models.Users.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Api(value = "/user", description = "Endpoint to User Service")
@Path("/user")

public class UserService {

    private MockAPI ma;

    public UserService() throws Exception {
        this.ma = MockAPIImpl.getInstance();
        if (ma.sizeUsers() == 0) {
            this.ma.addUser("jota","1234","Jordi","SC","mail1",21);
            this.ma.addUser("eric","4321","Eric","JB","mail2",21);
            this.ma.addObjectStore("Botas");
            this.ma.addObjectStore("Saco");
            this.ma.buyObject("Saco","jota");
        }
    }
    @POST
    @ApiOperation(value = "Mock Login", notes = "asdasd")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Successful", response = UserLogin.class, responseContainer="List"),
            @ApiResponse(code = 404, message = "User not found", responseContainer="List"),
            @ApiResponse(code = 500, message = "Password not match", responseContainer="List")
    })
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(UserLogin user) {
        try{
            UserLogin u = this.ma.getUserLogin(user.getUsername(),user.getPassword());
            return Response.status(201).entity(u).build();
        }catch(UserNotFoundException e1){
            return Response.status(404).build();
        }catch(PasswordNotMatchException e2){
            return Response.status(500).build();
        }
    }
    @POST
    @ApiOperation(value = "Mock Register", notes = "asdasd")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Successful", response = UserProfile.class, responseContainer="List"),
            @ApiResponse(code = 500, message = "Existant user", responseContainer="List")
    })
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response register(UserProfile user) {
        try{
            User u = this.ma.addUser(user.getUsername(),user.getPassword(),user.getName(),user.getSurname(),user.getMail(),user.getAge());
            return Response.status(201).entity(u).build();
        }catch(ExistantUserException e1) {
            return Response.status(500).build();
        }
    }
    @GET
    @ApiOperation(value = "profile", notes = "asdasd")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Successful", response = UserProfile.class),
            @ApiResponse(code = 404, message = "User not found")
    })
    @Path("/profile/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response profile(@PathParam("username") String username) {
        try{
            UserProfile userProfile = this.ma.getProfile(username);
            return Response.status(201).entity(userProfile).build();
        }catch(UserNotFoundException e1){
            return Response.status(404).build();
        }
    }
    @GET
    @ApiOperation(value = "statistics", notes = "asdasd")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Successful", response = UserStatistics.class),
            @ApiResponse(code = 404, message = "User not found")
    })
    @Path("/statistics/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response statistics(@PathParam("username") String username) {
        try{
            UserStatistics userStatistics = this.ma.getStatistics(username);
            return Response.status(201).entity(userStatistics).build();
        }catch(UserNotFoundException e1){
            return Response.status(404).build();
        }
    }
    @GET
    @ApiOperation(value = "inventory", notes = "asdasd")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Successful", response = UserInventory.class),
            @ApiResponse(code = 404, message = "User not found")
    })
    @Path("/inventory/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response inventory(@PathParam("username") String username){
        try {
            UserInventory userInventary = this.ma.getInventory(username);
            return Response.status(201).entity(userInventary).build();
        }catch (UserNotFoundException e1){
            return Response.status(404).build();
        }
    }
    @POST
    @ApiOperation(value = "Buy", notes = "asdasd")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Successful"),
            @ApiResponse(code = 404, message = "User not found"),
            @ApiResponse(code = 500, message = "Object not found")

    })
    @Path("/buy/{username}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response buy(Objeto objTO, @PathParam("username") String username) {
        try{
            this.ma.buyObject(objTO.getNombre(),username);
            return Response.status(201).build();
        }catch(ObjectNotExist e1) {
            return Response.status(500).build();
        }catch (UserNotFoundException e2) {
            return Response.status(404).build();
        }
    }

}
