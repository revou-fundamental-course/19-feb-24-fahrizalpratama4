function submit() {
    var nama = document.getElementById('nama').value;
    var tanggal_lahir = document.getElementById('tanggal_lahir').value;
    var jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    var additional_info = document.getElementById('additional_info').value;
    var currentDateTime = new Date();
    var currentDateTimeString = currentDateTime.toString();
    var message =  "" + currentDateTimeString+ "\nNama: " + nama + "\nTanggal Lahir: " + tanggal_lahir + "\nJenis Kelamin: " + jenis_kelamin + "\nPesan: " + additional_info;
    
    document.getElementById('display-data').value = message;
}

function clearForm() {
    document.getElementById('nama').value = '';
    document.getElementById('tanggal_lahir').value = '';
    document.getElementById('laki-laki').checked = false;
    document.getElementById('perempuan').checked = false;
    document.getElementById('additional_info').value = '';
    document.getElementById('display-data').value = '';
    
}

document.addEventListener("DOMContentLoaded", function() {
    var HomeLink = document.querySelector('a[href="#home"]');
    HomeLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute("href").substring(1); 
        var targetElement = document.getElementById(targetId); 

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); 
        }
        
       
        biodataLink.click(); 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var portfolioLink = document.querySelector('a[href="#portfolio"]');
    portfolioLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute("href").substring(1); 
        var targetElement = document.getElementById(targetId); 

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); 
        }
        
       
        biodataLink.click(); 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var ourProfileLink = document.querySelector('a[href="#profile"]');
    
    ourProfileLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute("href").substring(1); 
        var targetElement = document.getElementById(targetId); 
    
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); 
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var OurHeadquarterLink = document.querySelector('a[href="#Headquarter"]');
    
    OurHeadquarterLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute("href").substring(1); 
        var targetElement = document.getElementById(targetId); 
    
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); 
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var MessageUsLink = document.querySelector('a[href="#contact"]');
    
    MessageUsLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute("href").substring(1); 
        var targetElement = document.getElementById(targetId); 
    
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); 
        }
    });
});



