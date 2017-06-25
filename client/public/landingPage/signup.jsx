<!DOCTYPE html>
<html>
<head>
  <title>Runner Signup</title>
  <style type="text/css">
    form {
        border: 3px solid #f1f1f1;
    }

    /* Full-width inputs */
    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    /* Set a style for all buttons */
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    .container {
      height: 20px,
      width: 30px;
    }

    h1 {
      text-align: center;
      
    }

  </style>
</head>
<body>
  <title>Runner</title>
  <h1>Runner Signup</h1>
  <div class="container">
    <form method="POST" action="/signup">
      <div>
        <label>Username</label>
        <input type="text" placeholder="Username..."></input>

        <label>Password</label>
        <input type="Password" placeholder="Password..."></input>

        <label>Confirm Password</label>
        <input type="Password" placeholder="Password..."></input>

        <button type="submit">Signup</button>
      </div>
    </form>
  </div>

</body>
</html>
  
