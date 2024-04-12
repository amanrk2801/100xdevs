// type KeyInput = "up" | "down" | "left" | "right";

// function doSomething(keyPressed: KeyInput) {
//   // do something
//   if (keyPressed == "up") {
//     console.log("you clicked up arrow key");
//   }
// }

// doSomething("up");
// doSomething("down");
// // doSomething("xyz"); // you cannot declare other than up/down/left/right because you declare type on the top.

// --------------------------------------------

// enum Direction{
//     Up, // 0
//     Down, // 1
//     Left, // 2
//     Right // 3
// }

// function doSomething(keyPressed: Direction) {
//   // do something
//   if (keyPressed == Direction.Up) {
//     console.log("you clicked up arrow key " + Direction.Up);
//   }else if(keyPressed==Direction.Down){
//     console.log("you clicked up arrow key " + Direction.Down);
//   }
// }

// doSomething(Direction.Up);
// doSomething(Direction.Down);
// doSomething("xyz"); // you cannot declare other than up/down/left/right because you declare type on the top.

// --------------------------------------------

// enum Direction {
//   Up = "Up",
//   Down = "Down",
//   Left = "Left",
//   Right = "Right",
// }

// function doSomething(keyPressed: Direction) {
//   // do something
//   if (keyPressed == Direction.Up) {
//     console.log("you clicked up arrow key " + Direction.Up);
//   } else if (keyPressed == Direction.Down) {
//     console.log("you clicked up arrow key " + Direction.Down);
//   }
// }

// doSomething(Direction.Up);
// doSomething(Direction.Down);

// --------------------------------------------

// Common use case in express
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })

