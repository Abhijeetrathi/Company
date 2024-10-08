const employeeData = {
    "Development": [
        { name: "John Doe", daysWorked: 25, leavesTaken: 3, salary: 50000 },
        { name: "Jane Smith", daysWorked: 28, leavesTaken: 1, salary: 60000 },
        { name: "Peter Jones", daysWorked: 27, leavesTaken: 2, salary: 45000 },
        { name: "Mary Brown", daysWorked: 29, leavesTaken: 0, salary: 55000 }
    ],
    "Design": [
        { name: "Alice Green", daysWorked: 26, leavesTaken: 2, salary: 47000 },
        { name: "Mark White", daysWorked: 24, leavesTaken: 4, salary: 53000 },
        { name: "Eve Black", daysWorked: 29, leavesTaken: 1, salary: 52000 },
        { name: "Chris Blue", daysWorked: 30, leavesTaken: 0, salary: 56000 }
    ],
    "Marketing": [
        { name: "Sara Red", daysWorked: 23, leavesTaken: 5, salary: 48000 },
        { name: "Tom Yellow", daysWorked: 27, leavesTaken: 2, salary: 52000 },
        { name: "Mike Orange", daysWorked: 29, leavesTaken: 1, salary: 55000 },
        { name: "Lisa Purple", daysWorked: 30, leavesTaken: 0, salary: 60000 }
    ]
};
 // Function to show team members based on team name
 function showTeamMembers(teamName) {
    const employeeTable = document.getElementById("employeeTable");
    const employeeDataContainer = document.getElementById("employeeData");

    // Clear previous data
    employeeDataContainer.innerHTML = '';

    // Add new data
    employeeData[teamName].forEach(member => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.daysWorked}</td>
            <td>${member.leavesTaken}</td>
            <td>${member.salary}</td>
        `;
        employeeDataContainer.appendChild(row);
    });

    // Show the table
    employeeTable.style.display = 'table';
}

$(document).ready(function(){
    const menu = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');

    menu.addEventListener('click', function(){
        sidebar.classList.toggle('active');
        if(window.innerWidth <= 768){
            sidebar.classList.remove('active');
        }
    });

    // navbar color
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 50) {
            $('.navbar').css('background','var(--backColor)');
            $('.navbar').css('box-shadow', " rgba (0, 0, 0, 0.1) 0px 4px 12px");
        }
        else{
            $('.navbar').css('background','transparent');
            $('.navbar').css('box-shadow', "none");
        }
    })

    var options = {
        series:[{
            name: 'Software Developer',
            data: [0, 5, 2, 3, 0, 1, 5, 4]
        },{
            name:'Project Manager',
            data: [1, 1, 3, 1, 1, 2, 3, 3]
        },{
            name:'Data Analyst',
            data: [5, 4, 3, 2, 2, 4, 5, 5]
        }],
        chart: {
            height: 300,
            type:'area',
            toolbar: {
                show:false,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#1a73e8','#3d348b','#e91e63'],
        stroke: {
            curve: 'smooth',
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            }
        },
        tooltip: {
            theme: 'dark',
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
            ],
            labels: {
                style: {
                    colors: 'var(--fontColor)'
                }
           }
        },
        yaxis :{
           labels: {
                style: {
                    colors: 'var(--fontColor)'
                }
           }
        },
        legend: {
            labels: {
                 colors: 'var(--fontColor)'   
           },
        },
    };

    var chart = new ApexCharts(document.querySelector("#chLine"), options);
    chart.render();
    
    // doughnut chart
    var options = {
        series: [20, 15, 30, 65],
        labels: ['Software Engineer', 'Project Manager', 'Data Analyst', 'Total Vacancies',],
        chart: {
            type: 'donut',
            height: 250,
            plotOptions: {
                pie: {
                    expandOnClick: true
                },
            },
        },
        colors: ['#3a86ff','#3d348b','#ff006c','#ffbe0b'],
        legend: {
            show: false
        }
    };
    var chart = new ApexCharts(document.querySelector('#dougnut-chart'), options);
    chart.render();
    })