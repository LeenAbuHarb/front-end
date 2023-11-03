let filterarray = [];

let data = [
    {
        id: 1,
        name: "Blood Suger",
        src: "../labs-master/img/1483958.webp",
        sss: "https://diabetesstrong.com/what-levels-of-blood-sugar-are-dangerous/",
    },
    {
        id: 2,
        name: "breast cancer",
        src: "img/Breast-Cancer-Awareness-Westminster-Ortho-Med-Clinic--removebg-preview (1).png",
        sss: "https://www.westminsterclinic.ae/blog/breast-cancer-awareness-2/",
        // 
    },
    {
        id: 3,
        name: "kidney function",
        src: "img/20211107165315349-removebg-preview.png",
        sss: "https://www.hindustantimes.com/lifestyle/health/weak-kidneys-6-effective-home-remedies-to-help-improve-kidney-function-101675153114433.html",

    },
    {
        id: 4,
        name: "B12",
        src: "img/60e2bb634236041d507bf792__2_-removebg-preview.png",
        sss: "https://www.carygastro.com/blog/the-impact-of-thyroid-disease-on-the-digestive-system",
        // 
    },
    {
        id: 5,
        name: "Urine examination",
        src: "img/istockphoto-1301900753-612x612-removebg-preview.png",
        sss: "https://www.istockphoto.com/vector/the-doctor-uses-a-urine-test-strip-gm1301900753-393804601",

    },
    {
        id: 6,
        name: "Cholesterol check",
        src: "img/Cholesterol-Screening-Cholesterol-Lab-Testing-Services-Market-1-removebg-preview.png",

        sss: "https://www.parashospitals.com/blogs/how-to-get-our-cholesterol-tested",

    },
    {
        id: 7,
        name: "Vitamin (D)",
        src: "img/d1ef7c86-3f52-4482-ac4e-af7adaf5db98-removebg-preview.png",
        sss: "https://www.parashospitals.com/blogs/how-to-get-our-cholesterol-tested",
    },
    {
        id: 8,
        name: "Vitamin (C)",
        src: "img/PLUMOI-removebg-preview.png",
        sss: "https://www.parashospitals.com/blogs/how-to-get-our-cholesterol-tested",

    },
    {
        id: 9,
        name: "calcium test",
        src: "img/calcium-deficiency-test__1_-removebg-preview.png",
        sss: "https://www.parashospitals.com/blogs/how-to-get-our-cholesterol-tested",

    },
    {
        id: 10,
        name: "Potassium check",
        src: "img/bigstock-143325803-min-1-removebg-preview.png",
        sss: "https://www.parashospitals.com/blogs/how-to-get-our-cholesterol-tested",

    },
    {
        id: 11,
        name: "Omega 3 check",
        src: "img/images__1_-removebg-preview.png",
        sss: "https://www.parashospitals.com/blogs/how-to-get-our-cholesterol-tested",

    },

]


function showmore(currarray) {

    document.getElementById("namess").innerHTML = "";
    for (var i = 0; i < currarray.length; i++) {
        document.getElementById("namess").innerHTML += `


		 <div class="col-md-3">
		<div class="service">
			<div class="icon">

				<p>
					<a target="_blank" href="${currarray[i].sss}">

						<img class="ime" src="${currarray[i].src}" alt="">
						<h4 class="names">${currarray[i].name}</h4>
					</a>
				</p>


			</div>
		</div>
	</div>


		`
    }



}

document.getElementById("myinput").addEventListener("keyup", function () {
    let text = document.getElementById("myinput").value;



    filterarray = data.filter(function (a) {
        if (a.name.includes(text) || a.name.toLowerCase().includes(text)) {
            return a.name;
        };

    });





    if (this.value == "") {
        showmore(data);    //no data 
    }
    else {
        if (filterarray == "") {
            // document.getElementById("para").style.display = 'block';
            document.getElementById("namess").innerHTML = "NOT FOUND ";
        }
        else {
            showmore(filterarray);
            // document.getElementById("para").style.display = 'none';
        }
    }

})
showmore(data);