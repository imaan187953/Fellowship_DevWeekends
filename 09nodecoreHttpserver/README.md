# Node Core HTTP Server

A mini backend project built using Node.js Core Modules without Express.

## Features

- HTTP Server using `http`
- Modular Routing
- Controllers
- File Reading (`fs/promises`)
- File Writing (`fs`)
- File Streaming
- EventEmitter
- Request Logging
- Request Counter
- JSON Responses
- Query Parameters
- Custom 404 Handling
- Server Status Endpoint

## Project Structure

```
node-http-server/
│
├── controllers/
├── data/
├── routes/
├── utils/
├── server.js
└── README.md
```

## Available Routes

| Route | Description |
|--------|-------------|
| `/` | Home |
| `/about` | About server |
| `/status` | Server uptime |
| `/stats` | Request statistics |
| `/read` | Read file |
| `/write` | Append to file |
| `/stream` | Stream file |

# 📸 Screenshots

## Home Route

![Home](./screenshots/home.png)

---

## About Route

![About](./screenshots/about.png)

---

## Status Route

![Status](./screenshots/status.png)

---

## Read File

![Read](./screenshots/read.png)
![ReadTerminal](./screenshots/read1.png)


---

## Write File

![Write](./screenshots/write.png)
![WriteTerminal](./screenshots/write1.png)

---

## Stream File

![Stream](./screenshots/stream.png)
![StreamTerminal](./screenshots/stream1.png)

---

## Stats Endpoint

![Stats](./screenshots/stats.png)

---

## Technologies Used

- Node.js
- HTTP Module
- File System (fs)
- Streams
- Events

Server:

```
http://localhost:3000
```