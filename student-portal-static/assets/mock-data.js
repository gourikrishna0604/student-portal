const MOCK_DATA = {
    version: 3,
    users: [
        { id: 1, username: 'admin', password: 'password', role: 'admin', name: 'Admin User' },
        { id: 2, username: 'student', password: 'password', role: 'student', studentId: 101, name: 'Gouri Krishna' },
        { id: 3, username: 'John Doe', password: 'password', role: 'student', studentId: 102, name: 'John Doe' }
    ],
    students: [
        {
            id: 101,
            name: 'Gouri Krishna',
            rollNo: 'CS2026001',
            department: 'Computer Science',
            semester: '6th',
            email: 'gouri@example.com',
            phone: '9876543210',
            address: '123 College Road, City',
            photo: 'https://via.placeholder.com/150',
            fees: { total: 50000, paid: 30000, due: 20000 },
            attendance: 75
        },
        {
            id: 102,
            name: 'John Doe',
            rollNo: 'CS2026002',
            department: 'Computer Science',
            semester: '6th',
            email: 'john@example.com',
            phone: '1234567890',
            address: '456 Uni Ave, City',
            photo: 'https://via.placeholder.com/150',
            fees: { total: 50000, paid: 50000, due: 0 },
            attendance: 72
        }
    ],
    attendanceRecords: [
        { date: '2026-01-20', studentId: 101, status: 'Present' },
        { date: '2026-01-21', studentId: 101, status: 'Present' },
        { date: '2026-01-22', studentId: 101, status: 'Absent' },
        { date: '2026-01-23', studentId: 101, status: 'Present' },
        { date: '2026-02-01', studentId: 102, status: 'Present' }
    ],
    timetable: [
        { day: 'Monday', subject: 'Data Structures', time: '10:00 AM' },
        { day: 'Monday', subject: 'Algorithms', time: '11:30 AM' },
        { day: 'Tuesday', subject: 'Database', time: '10:00 AM' }
    ],
    results: [
        { studentId: 101, semester: '5th', sgpa: 8.5, link: '#' },
        { studentId: 102, semester: '5th', sgpa: 7.2, link: '#' }
    ],
    supplementary: []
};
