const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./userModel');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// --- MAIN PAGES ---
app.get('/', (req, res) => res.render("index"));
app.get('/features', (req, res) => res.render("features"));
app.get('/pricing', (req, res) => res.render("pricing"));
app.get('/reviews', (req, res) => res.render("reviews"));

// --- CRUD OPERATIONS ---

// 1. READ
app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render("read", { users });
});

// 2. CREATE - GET Form
app.get('/create', (req, res) => {
    res.render("create");
});

// 2. CREATE - POST Process (UPDATED LOGIC)
app.post('/create', async (req, res) => {
    let { name, email } = req.body;

    // AUTOMATIC AVATAR ASSIGNMENT LOGIC:
    // 1. Count how many users currently exist
    const userCount = await userModel.countDocuments();
    
    // 2. Calculate index. 
    // If 0 users, (0 % 6) + 1 = 1. Image: avatar1.png
    // If 1 user, (1 % 6) + 1 = 2. Image: avatar2.png
    // If 6 users, (6 % 6) + 1 = 1. Cycles back to avatar1.png
    const avatarIndex = (userCount % 6) + 1;
    const image = `/images/avatar${avatarIndex}.png`;

    await userModel.create({ name, email, image });
    res.redirect('/read');
});

// 3. UPDATE
app.get('/edit/:id', async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.id });
    res.render("edit", { user });
});

app.post('/update/:id', async (req, res) => {
    // For edit, we keep the existing image unless you want to add logic to change it
    // Here we just update name and email for simplicity
    let { name, email } = req.body;
    await userModel.findOneAndUpdate({ _id: req.params.id }, { name, email }, { new: true });
    res.redirect('/read');
});

// 4. DELETE
app.get('/delete/:id', async (req, res) => {
    await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect('/read');
});

app.listen(3000, () => {
    console.log("EduVerse Server running on port 3000");
});