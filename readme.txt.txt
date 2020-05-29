 To do this task, I used React as front end Django as backend 
* client side work flow **
1. Created React project with text area input box and post comment button
2. User can type comment and click on post comment button
3. Initially like and dislike button has null values
4. After hitting post button value in comment box will get saved into DB through API
5. And previously saved DB data will get displayed in list formats
6. By hitting another api, I am displaying DB data
 ** server side work flow **
1.Created Django project and uses sqlite DB
2. Created models,URLs for api 
3. Used REST framework and serialized data as json response
**** Prerequisites ***
1. Start react (localhost:3000) and django(localhost:8000) server
2. Enter username and comment in web page and then click on post comment button
3. If it successful you will get all the details from DB   and also your entered data