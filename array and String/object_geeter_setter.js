var debitBalance = {

        balance : 3000,
        get getBalance()
        {
                return this.balance
        },

        set setBalance(balance)
        {
                if(balance > 0){
                        this.balance = balance;
                }
        }
};

//debitBalance.balance
//3000
//debitBalance.balance = 900;
//900
//debitBalance.balance
//900
