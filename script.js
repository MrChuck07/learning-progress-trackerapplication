// Define daily tasks for all 8 weeks
const tasks = {
    // Week 1
    "Week 1 - Day 1": ["Learn Java variables and data types", "Practice: Sum of two integers", "Practice: Area of a circle"],
    "Week 1 - Day 2": ["Learn if-else and switch-case", "Practice: Check positive/negative number", "Practice: Display day of the week"],
    "Week 1 - Day 3": ["Learn loops (for, while, do-while)", "Practice: Print first N natural numbers", "Practice: Factorial of a number"],
    "Week 1 - Day 4": ["Learn array manipulation", "Practice: Find largest number in array", "Practice: Sum all elements in array"],
    "Week 1 - Day 5": ["Learn Java functions/methods", "Practice: Function to calculate sum", "Practice: Function to check prime number"],
    "Week 1 - Day 6": ["Learn string manipulation", "Practice: Reverse a string", "Practice: Count vowels in a string"],
    "Week 1 - Day 7": ["Review everything", "Solve 3-5 beginner-level problems"],

    // Week 2
    "Week 2 - Day 1": ["Learn 2D arrays", "Practice: Matrix addition", "Practice: Transpose of matrix"],
    "Week 2 - Day 2": ["Learn recursion basics", "Practice: Factorial using recursion", "Practice: Fibonacci using recursion"],
    "Week 2 - Day 3": ["Learn sorting algorithms", "Practice: Bubble sort", "Practice: Selection sort"],
    "Week 2 - Day 4": ["Learn searching algorithms", "Practice: Linear search", "Practice: Binary search"],
    "Week 2 - Day 5": ["Learn Java OOP basics (Classes & Objects)", "Practice: Create simple class", "Practice: Constructor and methods"],
    "Week 2 - Day 6": ["Learn inheritance", "Practice: Extend a class", "Practice: Method overriding"],
    "Week 2 - Day 7": ["Review OOP concepts", "Solve 3-5 intermediate-level problems"],

    // Week 3 - Data Structures Basics
    "Week 3 - Day 1": ["Learn Linked Lists", "Practice: Insert node in Linked List", "Practice: Reverse Linked List"],
    "Week 3 - Day 2": ["Learn Stack", "Practice: Implement Stack", "Practice: Balanced parentheses"],
    "Week 3 - Day 3": ["Learn Queue", "Practice: Implement Queue", "Practice: Circular Queue"],
    "Week 3 - Day 4": ["Learn Hashing", "Practice: Implement Hash Map", "Practice: Count word frequency"],
    "Week 3 - Day 5": ["Review Linked List, Stack, Queue", "Solve 3-5 problems on Data Structures"],
    "Week 3 - Day 6": ["Learn Time Complexity", "Practice: Analyze time for sorting algorithms", "Analyze time for searching algorithms"],
    "Week 3 - Day 7": ["Review Time Complexity concepts", "Solve complexity analysis problems"],

    // Week 4 - Advanced Data Structures
    "Week 4 - Day 1": ["Learn Trees", "Practice: Binary Tree creation", "Practice: Tree traversal (inorder, preorder, postorder)"],
    "Week 4 - Day 2": ["Learn Binary Search Tree (BST)", "Practice: Insert/Delete in BST", "Practice: Search in BST"],
    "Week 4 - Day 3": ["Learn Heaps", "Practice: Implement Max Heap", "Practice: Heap sort"],
    "Week 4 - Day 4": ["Learn Graph Basics", "Practice: Graph traversal (BFS, DFS)", "Practice: Shortest path in graph"],
    "Week 4 - Day 5": ["Learn Dynamic Programming (DP)", "Practice: Fibonacci using DP", "Practice: Knapsack problem"],
    "Week 4 - Day 6": ["Review Trees, BST, Heaps", "Solve 3-5 problems on trees and graphs"],
    "Week 4 - Day 7": ["Rest day or review DP"],

    // Week 5 - Problem Solving
    "Week 5 - Day 1": ["Solve 5-7 problems on arrays", "Solve 5 problems on sorting algorithms"],
    "Week 5 - Day 2": ["Solve 5-7 problems on strings", "Solve 5 problems on string manipulation"],
    "Week 5 - Day 3": ["Solve 5-7 problems on recursion", "Solve 5 problems on Linked List operations"],
    "Week 5 - Day 4": ["Solve 5-7 problems on Stacks", "Solve 5 problems on Queue"],
    "Week 5 - Day 5": ["Solve 5-7 problems on Trees", "Solve 5 problems on Binary Search Trees"],
    "Week 5 - Day 6": ["Solve 5-7 problems on Graphs", "Solve 5 problems on DFS/BFS"],
    "Week 5 - Day 7": ["Review week progress", "Solve mixed set of 5 problems"],

    // Week 6 - Advanced Algorithms
    "Week 6 - Day 1": ["Learn Greedy Algorithms", "Practice: Activity selection", "Practice: Huffman coding"],
    "Week 6 - Day 2": ["Learn Backtracking", "Practice: N-Queens problem", "Practice: Rat in a Maze"],
    "Week 6 - Day 3": ["Learn Divide and Conquer", "Practice: Merge sort", "Practice: Quick sort"],
    "Week 6 - Day 4": ["Learn Graph algorithms", "Practice: Dijkstra's shortest path", "Practice: Bellman-Ford algorithm"],
    "Week 6 - Day 5": ["Review Divide and Conquer, Backtracking", "Solve 5-7 advanced algorithm problems"],
    "Week 6 - Day 6": ["Solve mixed problems on advanced algorithms", "Practice on LeetCode or other platforms"],
    "Week 6 - Day 7": ["Rest or solve additional 5 problems"],

    // Week 7 - LeetCode Problems
    "Week 7 - Day 1": ["Solve 5-7 problems on LeetCode (Easy)", "Review solutions"],
    "Week 7 - Day 2": ["Solve 5-7 problems on LeetCode (Easy-Medium)", "Analyze time complexity of solutions"],
    "Week 7 - Day 3": ["Solve 5-7 problems on LeetCode (Medium)", "Practice optimizing solutions"],
    "Week 7 - Day 4": ["Solve 5-7 problems on LeetCode (Medium-Hard)", "Review optimized solutions"],
    "Week 7 - Day 5": ["Solve 5-7 problems on LeetCode (Hard)", "Practice complex algorithm-based problems"],
    "Week 7 - Day 6": ["Review all solutions, optimize where necessary", "Solve any missed problems"],
    "Week 7 - Day 7": ["Practice mock interview problems"],

    // Week 8 - Final Review
    "Week 8 - Day 1": ["Review time complexity and space complexity formulas", "Solve 5 problems focusing on efficiency"],
    "Week 8 - Day 2": ["Practice LeetCode problems (Hard)", "Solve 5-7 algorithmic problems"],
    "Week 8 - Day 3": ["Review advanced data structures (Trees, Graphs)", "Solve 3-5 problems on Graph traversal"],
    "Week 8 - Day 4": ["Solve 5 problems focused on optimization (DP, Greedy, etc.)", "Practice optimizing complex solutions"],
    "Week 8 - Day 5": ["Practice final mock interview problems (focus on speed)"],
    "Week 8 - Day 6": ["Rest or review"],
    "Week 8 - Day 7": ["Final practice day or wrap-up"]  
};

const taskList = document.getElementById("task-list");
const daySelect = document.getElementById("day-select");
let progress = JSON.parse(localStorage.getItem("progress")) || {};
let currentDay = Object.keys(tasks)[0];

// Populate the day dropdown
function loadDays() {
    Object.keys(tasks).forEach((day) => {
        const option = document.createElement("option");
        option.value = day;
        option.text = day;
        daySelect.appendChild(option);
    });
}

// Load selected day's tasks
function loadSelectedDay() {
    currentDay = daySelect.value;
    loadTasks();
}

function loadTasks() {
    taskList.innerHTML = "";
    const tasksArray = tasks[currentDay];

    tasksArray.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        const isChecked = progress[currentDay]?.[index] ? "checked" : "";

        taskDiv.innerHTML = `
            <input type="checkbox" id="${currentDay}-${index}" ${isChecked} onchange="toggleTask('${currentDay}', ${index})">
            <label for="${currentDay}-${index}">${task}</label>
        `;

        if (isChecked) {
            taskDiv.classList.add("checked");
        }

        taskList.appendChild(taskDiv);
    });

    updateProgressBar();
}

function toggleTask(day, index) {
    if (!progress[day]) {
        progress[day] = [];
    }
    progress[day][index] = !progress[day][index];
    localStorage.setItem("progress", JSON.stringify(progress));

    loadTasks();
}

function updateProgressBar() {
    const tasksArray = tasks[currentDay];
    const completedTasks = progress[currentDay]?.filter(Boolean).length || 0;
    const progressPercent = (completedTasks / tasksArray.length) * 100;

    const progressBar = document.querySelector(".progress");
    progressBar.style.width = `${progressPercent}%`;
}

// Reset progress confirmation modal
function showResetModal() {
    const modal = document.getElementById("reset-modal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("reset-modal");
    modal.style.display = "none";
}

// Reset progress
function resetProgress() {
    progress = {};
    localStorage.setItem("progress", JSON.stringify(progress));
    closeModal();
    loadTasks();
}

// Initialize the application
window.onload = function() {
    loadDays();
    loadTasks();
    daySelect.value = currentDay;
};
