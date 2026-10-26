// Get canvas elements
const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');

// Data
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const revenue = [50000, 60000, 55000, 70000, 75000, 80000];

const expenses = [30000, 35000, 32000, 40000, 42000, 45000];

const profit = [20000, 25000, 23000, 30000, 33000, 35000];

// Common chart settings
const commonOptions = {
    responsive: true,
    maintainAspectRatio: false
};

// 1. LINE CHART
new Chart(ctx1, {
    type: 'line',

    data: {
        labels: months,

        datasets: [
            {
                label: 'Revenue',
                data: revenue,
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
                borderWidth: 2,
                tension: 0.3
            },
            {
                label: 'Expenses',
                data: expenses,
                borderColor: '#dc2626',
                backgroundColor: '#dc2626',
                borderWidth: 2,
                tension: 0.3
            },
            {
                label: 'Profit',
                data: profit,
                borderColor: '#16a34a',
                backgroundColor: '#16a34a',
                borderWidth: 2,
                tension: 0.3
            }
        ]
    },

    options: {
        ...commonOptions,

        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// 2. BAR CHART
new Chart(ctx2, {
    type: 'bar',

    data: {
        labels: months,

        datasets: [
            {
                label: 'Revenue',
                data: revenue,

                backgroundColor: [
                    '#2563eb',
                    '#60a5fa',
                    '#f59e0b',
                    '#16a34a',
                    '#8b5cf6',
                    '#ec4899'
                ],

                borderRadius: 5
            }
        ]
    },

    options: {
        ...commonOptions,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            y: {
                beginAtZero: true,

                ticks: {
                    callback: function (value) {
                        return '₹' + value.toLocaleString('en-IN');
                    }
                }
            }
        }
    }
});

// 3. PIE CHART
new Chart(ctx3, {
    type: 'pie',

    data: {
        labels: [
            'Reinvestment (40%)',
            'Salaries (30%)',
            'Miscellaneous (30%)'
        ],

        datasets: [
            {
                data: [40, 30, 30],

                backgroundColor: [
                    '#2563eb',
                    '#16a34a',
                    '#f59e0b'
                ],

                borderColor: '#ffffff',
                borderWidth: 2
            }
        ]
    },

    options: {
        ...commonOptions,

        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});