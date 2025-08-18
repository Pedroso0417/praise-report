document.querySelector('.clickable-image').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            
            // Trigger the image download
            const link = document.createElement('a');
            link.href = './image/praise-report.jpg';
            link.download = 'praise-report.jpg';
            link.click(); // Initiates the download

            // Optionally, you can display the link to the Google Form
            const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSchHEQxuzPXIsV61AqanlzkR4BSSaMztN0LwV12fQRSc7G61A/viewform";
            alert('Image downloaded! You can also go to the Praise Report Form: ' + formLink);
        });
// async function downloadFormData() {
//     const sheetID = "your-sheet-id-here"; // Replace with your Google Sheet ID
//     const apiKey = "your-api-key"; // Your API Key
//     const range = "Form Responses 1"; // Your Google Sheet's range

//     // Construct API URL to get data from Google Sheets
//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.values) {
//         // Process the data and download it as CSV
//         let csvContent = "data:text/csv;charset=utf-8,";

//         // Loop through the data and create CSV rows
//         data.values.forEach(row => {
//             csvContent += row.join(",") + "\r\n";
//         });

//         // Trigger the download
//         const encodedUri = encodeURI(csvContent);
//         const link = document.createElement("a");
//         link.setAttribute("href", encodedUri);
//         link.setAttribute("download", "praise-report-data.csv");
//         document.body.appendChild(link);
//         link.click();
//     } else {
//         console.error("No data found");
//     }
// }

// // Call the function to download data
// downloadFormData();
