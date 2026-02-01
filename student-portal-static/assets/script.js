// Data Management
const DB_KEY = 'studentPortal_db';
const SESSION_KEY = 'studentPortal_session';

const DB = {
    init: function () {
        if (!localStorage.getItem(DB_KEY) && typeof MOCK_DATA !== 'undefined') {
            localStorage.setItem(DB_KEY, JSON.stringify(MOCK_DATA));
            console.log('Database initialized with mock data');
        }
    },
    get: function () {
        return JSON.parse(localStorage.getItem(DB_KEY) || '{}');
    },
    save: function (data) {
        localStorage.setItem(DB_KEY, JSON.stringify(data));
    },
    update: function (collection, item) {
        const data = this.get();
        if (!data[collection]) data[collection] = [];

        const index = data[collection].findIndex(i => i.id === item.id);
        if (index >= 0) {
            data[collection][index] = item;
        } else {
            // Auto-increment ID if not present (simple logic)
            if (!item.id) item.id = Date.now();
            data[collection].push(item);
        }
        this.save(data);
    }
};

// Auth Management
const Auth = {
    login: function (username, password) {
        const db = DB.get();
        const user = db.users.find(u => u.username === username && u.password === password);

        if (user) {
            sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
            return user;
        }
        return null;
    },
    logout: function () {
        sessionStorage.removeItem(SESSION_KEY);
        window.location.href = '../index.html';
    },
    getCurrentUser: function () {
        return JSON.parse(sessionStorage.getItem(SESSION_KEY));
    },
    requireRole: function (role) {
        const user = this.getCurrentUser();
        if (!user) {
            window.location.href = '../index.html';
            return;
        }
        if (user.role !== role) {
            alert('Unauthorized access');
            window.location.href = user.role === 'admin' ? '../admin/dashboard.html' : '../student/dashboard.html';
        }
        return user;
    }
};

// Initialize DB on load
document.addEventListener('DOMContentLoaded', () => {
    DB.init();
});
