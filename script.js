document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task" id="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete" id="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}

function orange() {
    document.body.style.background = "orange";
    document.getElementById("push").style.background='orange';
    document.getElementById("sc").style.color="orange";
    document.getElementById("gc").style.color="orange";
    document.getElementById("logo").style.color="orange";
    document.getElementById("ss").style.color="orange";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="orange";
    document.getElementById("tw").style.color="orange";
    document.getElementById("gh").style.color="orange";
    document.getElementById("ln").style.color="orange";
    document.getElementById("me").style.color="orange";
    document.getElementById("times").style.color="orange";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(255, 153, 51,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(255, 153, 51,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    
  }
  function yellow() {
    document.body.style.background = "#ffff00";
    document.getElementById("push").style.background='#ffff00';
    document.getElementById("sc").style.color="#ffff00";
    document.getElementById("gc").style.color="#ffff00";
    document.getElementById("logo").style.color="#ffff00";
    document.getElementById("ss").style.color="#ffff00";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="#ffff00";
    document.getElementById("tw").style.color="#ffff00";
    document.getElementById("gh").style.color="#ffff00";
    document.getElementById("ln").style.color="#ffff00";
    document.getElementById("me").style.color="#ffff00";
    document.getElementById("times").style.color="#ffff00";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(255, 255, 102,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(255, 255, 102,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }
  function red() {
    document.body.style.background = "red";
    document.getElementById("push").style.background='red';
    document.getElementById("sc").style.color="red";
    document.getElementById("gc").style.color="red";
    document.getElementById("logo").style.color="red";
    document.getElementById("ss").style.color="red";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="red";
    document.getElementById("tw").style.color="red";
    document.getElementById("gh").style.color="red";
    document.getElementById("ln").style.color="red";
    document.getElementById("me").style.color="red";
    document.getElementById("times").style.color="red";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(255, 0, 0,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(255, 0, 0,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }

  function blue() {
    document.body.style.background = "blue";
    document.getElementById("push").style.background='blue';
    document.getElementById("sc").style.color="blue";
    document.getElementById("gc").style.color="blue";
    document.getElementById("logo").style.color="blue";
    document.getElementById("ss").style.color="blue";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="blue";
    document.getElementById("tw").style.color="blue";
    document.getElementById("gh").style.color="blue";
    document.getElementById("ln").style.color="blue";
    document.getElementById("me").style.color="blue";
    document.getElementById("times").style.color="blue";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(0, 51, 204,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(0, 51, 204,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }
  function purple() {
    document.body.style.background = "purple";
    document.getElementById("push").style.background='purple';
    document.getElementById("sc").style.color="purple";
    document.getElementById("gc").style.color="purple";
    document.getElementById("logo").style.color="purple";
    document.getElementById("ss").style.color="purple";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="purple";
    document.getElementById("tw").style.color="purple";
    document.getElementById("gh").style.color="purple";
    document.getElementById("ln").style.color="purple";
    document.getElementById("me").style.color="purple";
    document.getElementById("times").style.color="purple";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(102, 0, 102,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(102, 0, 102,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }
 
  function white() {
    document.body.style.background = "white";
    document.getElementById("100day").style.color="#8052ec";
    document.getElementById("bars").style.color="#8052ec";
    document.getElementById("title").style.color="#8052ec";
    document.getElementById("push").style.background="#8052ec";
    document.getElementById("sc").style.color="#8052ec";
    document.getElementById("gc").style.color="#8052ec";
    document.getElementById("logo").style.color="#8052ec";
    document.getElementById("ss").style.color="#8052ec";

    document.getElementById("fb").style.color="#8052ec";
    document.getElementById("tw").style.color="#8052ec";
    document.getElementById("gh").style.color="#8052ec";
    document.getElementById("ln").style.color="#8052ec";
    document.getElementById("me").style.color="#8052ec";
    document.getElementById("times").style.color="#8052ec";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(255, 255, 255,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(255, 255, 255,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }

  function BP() {
    document.body.style.background = "linear-gradient(135deg, #8052ec, #d161ff )";
    document.getElementById("push").style.background='#8052ec';
    document.getElementById("sc").style.color="#8052ec";
    document.getElementById("gc").style.color="#8052ec";
    document.getElementById("logo").style.color="#8052ec";
    document.getElementById("ss").style.color="#8052ec";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="#8052ec";
    document.getElementById("tw").style.color="#8052ec";
    document.getElementById("gh").style.color="#8052ec";
    document.getElementById("ln").style.color="#8052ec";
    document.getElementById("me").style.color="#8052ec";
    document.getElementById("times").style.color="#8052ec";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(128, 82, 236,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(128, 82, 236,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }

  function OY() {
    document.body.style.background = "linear-gradient(135deg,#fd9800,#fafd26)";
    document.getElementById("push").style.background='#fd9800';
    document.getElementById("sc").style.color="#fd9800";
    document.getElementById("gc").style.color="#fd9800";
    document.getElementById("logo").style.color="#fd9800";
    document.getElementById("ss").style.color="#fd9800";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="#fd9800";
    document.getElementById("tw").style.color="#fd9800";
    document.getElementById("gh").style.color="#fd9800";
    document.getElementById("ln").style.color="#fd9800";
    document.getElementById("me").style.color="#fd9800";
    document.getElementById("times").style.color="#fd9800";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(253, 152, 0,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(253, 152, 0,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }

  function BB() {
    document.body.style.background = "linear-gradient(135deg,#3d7bff,#0509fc)";
    document.getElementById("push").style.background='#3d7bff';
    document.getElementById("sc").style.color="#3d7bff";
    document.getElementById("gc").style.color="#3d7bff";
    document.getElementById("logo").style.color="#3d7bff";
    document.getElementById("ss").style.color="#3d7bff";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="#3d7bff";
    document.getElementById("tw").style.color="#3d7bff";
    document.getElementById("gh").style.color="#3d7bff";
    document.getElementById("ln").style.color="#3d7bff";
    document.getElementById("me").style.color="#3d7bff";
    document.getElementById("times").style.color="#3d7bff";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(61, 123, 255,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(61, 123, 255,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }

  function RP() {
    document.body.style.background = "linear-gradient(135deg,#fd0000,#ff4ae7)";
    document.getElementById("push").style.background='#fd0000';
    document.getElementById("sc").style.color="#fd0000";
    document.getElementById("gc").style.color="#fd0000";
    document.getElementById("logo").style.color="#fd0000";
    document.getElementById("ss").style.color="#fd0000";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="#fd0000";
    document.getElementById("tw").style.color="#fd0000";
    document.getElementById("gh").style.color="#fd0000";
    document.getElementById("ln").style.color="#fd0000";
    document.getElementById("me").style.color="#fd0000";
    document.getElementById("times").style.color="#fd0000";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(253, 0, 0,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(253, 0, 0,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }

  function AB() {
    document.body.style.background = "linear-gradient(135deg,#00fdfd,#055bfc)";
    document.getElementById("push").style.background='#00fdfd';
    document.getElementById("sc").style.color="#00fdfd";
    document.getElementById("gc").style.color="#00fdfd";
    document.getElementById("logo").style.color="#00fdfd";
    document.getElementById("ss").style.color="#00fdfd";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="#00fdfd";
    document.getElementById("tw").style.color="#00fdfd";
    document.getElementById("gh").style.color="#00fdfd";
    document.getElementById("ln").style.color="#00fdfd";
    document.getElementById("me").style.color="#00fdfd";
    document.getElementById("times").style.color="#00fdfd";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(0, 253, 253,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(0, 253, 253,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }

  function RO() {
    document.body.style.background = "linear-gradient(135deg,#fd0000,#ff960d)";
    document.getElementById("push").style.background='#fd0000';
    document.getElementById("sc").style.color="#fd0000";
    document.getElementById("gc").style.color="#fd0000";
    document.getElementById("logo").style.color="#fd0000";
    document.getElementById("ss").style.color="#fd0000";
    document.getElementById("100day").style.color="white";
    document.getElementById("bars").style.color="white";

    document.getElementById("fb").style.color="#fd0000";
    document.getElementById("tw").style.color="#fd0000";
    document.getElementById("gh").style.color="#fd0000";
    document.getElementById("ln").style.color="#fd0000";
    document.getElementById("me").style.color="#fd0000";
    document.getElementById("times").style.color="#fd0000";
    document.getElementById("newtask").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(253, 0, 0,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
    document.getElementById("tasks").style.boxShadow= "inset 5px 5px 5px rgba(0, 0, 0,0.05),inset -5px -5px 5px rgba(255, 255, 255,0.5),5px 5px 5px rgba(0, 0, 0,0.05), -5px -5px 5px rgba(253, 0, 0,0.5),inset 0px 0px 4px rgba(255, 255, 255,.2)";
  }