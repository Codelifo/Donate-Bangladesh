
const donateElement = document.getElementById('donate-btn');
donateElement.addEventListener('click', function(){
    const mainBalanceElement = getTextFieldValueById('main-balance');
    const cardTotalDonate = getTextFieldValueById('card-donate-balance');
    const donateInputField = getInputFieldValueById('donate');

    console.log(mainBalanceElement, cardTotalDonate , donateInputField)
    // validation
    if(isNaN(donateInputField) || donateInputField <= 0 )
        {
            document.getElementById('donate-error').classList.remove('hidden')
            // document.getElementById('donate').value = ''
            return ;
        }
        else{
            document.getElementById('donate-error').classList.add('hidden')
        }
    
    // calculation 
    const cardNewTotal = cardTotalDonate + donateInputField;
    const newMainBalance = mainBalanceElement - donateInputField;

    //validation check  
    if(donateInputField > mainBalanceElement)
    {
        alert('Main Balance Less Then Donate amount. ')
        return;
    }

    document.getElementById('main-balance').innerText = newMainBalance.toFixed(2);
    document.getElementById('card-donate-balance').innerText = cardNewTotal.toFixed(2);
    document.getElementById('donate').value = '';

    historyGenerator('heading', donateInputField)

    // popup model open
    modelOpen()

})
// popup model close
const closeModelBtn = document.getElementById("close-model");
closeModelBtn.addEventListener("click", function () {
  model.classList.add("hidden");
});




/**
 * * history button functionality 
 * * button switching
 */ 

const historyElement = document.getElementById('history-button');
const donationElement = document.getElementById('donation-button');
historyElement.addEventListener('click', function(){

    historyElement.classList.add('bg-btn_color', 'border-none', 'text-black')
    historyElement.classList.remove('text-gray-600')

    donationElement.classList.add('border', 'text-gray-600')
    donationElement.classList.remove('bg-btn_color', )

    // switching donation page to history page
    document.getElementById('card-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
    

})

donationElement.addEventListener('click', function(){
    donationElement.classList.add('bg-btn_color' )
    donationElement.classList.remove('border', 'text-gray-600')

    historyElement.classList.add('text-gray-600')
    historyElement.classList.remove('bg-btn_color', 'border-none', 'text-black')

    // switching history page to donation page
    document.getElementById('card-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
})


window.addEventListener("scroll", function () {

    var previousScrollY = window.scrollY;
    if(previousScrollY > 0)
    {
          const header = document.getElementById('header');
          header.classList.add('backdrop-blur-md', 'bg-white/30')
          const navbar = document.getElementById('navbar');
          navbar.classList.remove('bg-nab_color')
          document.getElementById('nav-btn').classList.add('border-none')
    }
    else if (previousScrollY === 0)
    {
      const navbar = document.getElementById('navbar');
      navbar.classList.add('bg-nab_color')
      document.getElementById('nav-btn').classList.remove('border-none')
    }
  
  });
  


  const donateElementFeni = document.getElementById('donate-btn-feni');
  donateElementFeni.addEventListener('click', function(){
      const mainBalanceElement = getTextFieldValueById('main-balance');
      const cardTotalDonate = getTextFieldValueById('card-donate-balance-feni');
      const donateInputField = getInputFieldValueById('donate-feni');
  
      console.log(mainBalanceElement, cardTotalDonate , donateInputField)
      // validation
      if(isNaN(donateInputField) || donateInputField <= 0 )
          {
              document.getElementById('donate-error-feni').classList.remove('hidden')
              // document.getElementById('donate').value = ''
              return ;
          }
          else{
              document.getElementById('donate-error-feni').classList.add('hidden')
          }
      
      // calculation 
      const cardNewTotal = cardTotalDonate + donateInputField;
      const newMainBalance = mainBalanceElement - donateInputField;
  
      //validation check  
      if(donateInputField > mainBalanceElement)
      {
          alert('Main Balance Less Then Donate amount. ')
          return;
      }
  
      document.getElementById('main-balance').innerText = newMainBalance.toFixed(2);
      document.getElementById('card-donate-balance-feni').innerText = cardNewTotal.toFixed(2);
      document.getElementById('donate-feni').value = '';
  
      historyGenerator('heading-feni', donateInputField)
  
      // popup model open
      modelOpen()
  
  })