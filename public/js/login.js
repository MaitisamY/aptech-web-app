$(window).on( "load", () => {

    $( '#headNote' ).html( "Aptech " + "<span> Karachi, Pakistan</span>" ).css( "color", "#febe10" ); //Setting h1 html from jQuery
    $( '#subtitle' ).html( " University Road Branch " ).css( "color", "#3b3a3a" ); //Setting h1 html from jQuery
    const date = new Date(); const thisYear = date.getFullYear(); //Getting current year


    $( '.credits' ).html( "<span>&copy;</span> " + thisYear); //Setting footNote html from jQuery
    $( '#student' ).addClass( "active" ); // Setting as an active on page load
       
    // const values capturing

       const student = $( '#student' ); 
       const teacher = $( '#teacher' );  
       const admin = $( '#admin' );
       const studentLogin = $( '#studentLogin' ); 
       const teacherLogin = $( '#teacherLogin' );  
       const adminLogin = $( '#adminLogin' );
       
    // Timeout function for message   

       setTimeout(function () {
        $( '.message' ).fadeOut( "slow" );
       }, 3000);
    

    // Onclick functionalities   

       $( '#student' ).on( "click", ()=> {
        return studentTab();
       });

       $( '#teacher' ).on( "click", ()=> {
        return teacherTab();
       });

       $( '#admin' ).on( "click", ()=> {
        return adminTab();
       });

    // Creating functions to navigate between student, teacher and admin //

       function studentTab() {
        student.addClass( "active" );
        studentLogin.removeClass( "invisible" );
        teacher.removeClass( "active" );
        teacherLogin.addClass( "invisible" );
        admin.removeClass( "active" );
        adminLogin.addClass( "invisible" );
       }

       function teacherTab() {
        teacher.addClass( "active" );
        teacherLogin.removeClass( "invisible" );
        admin.removeClass( "active" );
        adminLogin.addClass( "invisible" );
        student.removeClass( "active" );
        studentLogin.addClass( "invisible" );
       }

       function adminTab() {
        admin.addClass( "active" );
        adminLogin.removeClass( "invisible" );
        student.removeClass( "active" );
        studentLogin.addClass( "invisible" );
        teacher.removeClass( "active" );
        teacherLogin.addClass( "invisible" );
       }
    
    // Created functions to navigate between student, teacher and admin //

    // Password hide and Show Functionality - For Students //

       $( '#studentShowPassword' ).on( "change", function (event) {
        if (this.checked) {
            $( '#studentPassword' ).attr( "type", "text" );
        } else {
            $( '#studentPassword' ).attr( "type", "password" );
        }
       });
    
    // Password hide and Show Functionality - For Teachers //

    $( '#teacherShowPassword' ).on( "change", function (event) {
        if (this.checked) {
            $( '#teacherPassword' ).attr( "type", "text" );
        } else {
            $( '#teacherPassword' ).attr( "type", "password" );
        }
       });
    
    // Password hide and Show Functionality - For Admins //

    $( '#adminShowPassword' ).on( "change", function (event) {
        if (this.checked) {
            $( '#adminPassword' ).attr( "type", "text" );
        } else {
            $( '#adminPassword' ).attr( "type", "password" );
        }
       });
    
    // Password hide and Show Functionality //
   
});