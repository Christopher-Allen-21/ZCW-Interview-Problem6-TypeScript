import React from 'react'
import '../styling/MilitaryTimeRow.css';

export default function MilitaryTimeRow(props){
    const {
        selectedHour,
        selectedMinute,
        selectedAmPm
    } = props

    let convertedHour = "Zero One";
    let convertedMinute = "Zero";   

    if(selectedAmPm === "AM"){
        if(selectedHour === "01"){
            convertedHour = "Zero One Hundred and";
        }
        else if(selectedHour === "02"){
            convertedHour = "Zero Two Hundred and";
        }
        else if(selectedHour === "03"){
            convertedHour = "Zero Three Hundred and";
        }
        else if(selectedHour === "04"){
            convertedHour = "Zero Four Hundred and";
        }
        else if(selectedHour === "05"){
            convertedHour = "Zero Five Hundred and";
        }
        else if(selectedHour === "06"){
            convertedHour = "Zero Six Hundred and";
        }
        else if(selectedHour === "07"){
            convertedHour = "Zero Seven Hundred and";
        }
        else if(selectedHour === "08"){
            convertedHour = "Zero Eight Hundred and";
        }
        else if(selectedHour === "09"){
            convertedHour = "Zero Nine Hundred and";
        }
        else if(selectedHour === "10"){
            convertedHour = "Ten Hundred and";
        }
        else if(selectedHour === "11"){
            convertedHour = "Eleven Hundred and";
        }
        else if(selectedHour === "12"){
            convertedHour = "Zero Dark"
        }
    }
    else if(selectedAmPm === "PM"){
        if(selectedHour === "01"){
            convertedHour = "Thirteen Hundred and";
        }
        else if(selectedHour === "02"){
            convertedHour = "Fourteen Hundred and";
        }
        else if(selectedHour === "03"){
            convertedHour = "Fifteen Hundred and";
        }
        else if(selectedHour === "04"){
            convertedHour = "Sixteen Hundred and";
        }
        else if(selectedHour === "05"){
            convertedHour = "Seventeen Hundred and";
        }
        else if(selectedHour === "06"){
            convertedHour = "Eighteen Hundred and";
        }
        else if(selectedHour === "07"){
            convertedHour = "Nineteen Hundred and";
        }
        else if(selectedHour === "08"){
            convertedHour = "Twenty Hundred and";
        }
        else if(selectedHour === "09"){
            convertedHour = "Twenty-One Hundred and";
        }
        else if(selectedHour === "10"){
            convertedHour = "Twenty-Two Hundred and";
        }
        else if(selectedHour === "11"){
            convertedHour = "Twenty-Three Hundred and";
        }
        else if(selectedHour === "12"){
            convertedHour = "Twelve Hundred and";
        }
    }

    if(selectedMinute === "01"){
        convertedMinute = "Zero One";
    }
    else if(selectedMinute === "02"){
        convertedMinute = "Zero Two"
    }
    else if(selectedMinute === "03"){
        convertedMinute = "Zero Three"
    }
    else if(selectedMinute === "04"){
        convertedMinute = "Zero Four"
    }
    else if(selectedMinute === "05"){
        convertedMinute = "Zero Five"
    }
    else if(selectedMinute === "06"){
        convertedMinute = "Zero Six"
    }
    else if(selectedMinute === "07"){
        convertedMinute = "Zero Seven"
    }
    else if(selectedMinute === "08"){
        convertedMinute = "Zero Eight"
    }
    else if(selectedMinute === "09"){
        convertedMinute = "Zero Nine"
    }
    else if(selectedMinute === "10"){
        convertedMinute = "Ten"
    }
    else if(selectedMinute === "11"){
        convertedMinute = "Eleven";
    }
    else if(selectedMinute === "12"){
        convertedMinute = "Twelve"
    }
    else if(selectedMinute === "13"){
        convertedMinute = "Thirteen"
    }
    else if(selectedMinute === "14"){
        convertedMinute = "Fourteen"
    }
    else if(selectedMinute === "15"){
        convertedMinute = "Fifteen"
    }
    else if(selectedMinute === "16"){
        convertedMinute = "Sixteen"
    }
    else if(selectedMinute === "17"){
        convertedMinute = "Seventeen"
    }
    else if(selectedMinute === "18"){
        convertedMinute = "Eighteen"
    }
    else if(selectedMinute === "19"){
        convertedMinute = "Nineteen"
    }
    else if(selectedMinute === "20"){
        convertedMinute = "Twenty"
    }
    else if(selectedMinute === "21"){
        convertedMinute = "Twenty-One";
    }
    else if(selectedMinute === "22"){
        convertedMinute = "Twenty-Two"
    }
    else if(selectedMinute === "23"){
        convertedMinute = "Twenty-Three"
    }
    else if(selectedMinute === "24"){
        convertedMinute = "Twenty-Four"
    }
    else if(selectedMinute === "25"){
        convertedMinute = "Twenty-Five"
    }
    else if(selectedMinute === "26"){
        convertedMinute = "Twenty-Six"
    }
    else if(selectedMinute === "27"){
        convertedMinute = "Twenty-Seven"
    }
    else if(selectedMinute === "28"){
        convertedMinute = "Twenty-Eight"
    }
    else if(selectedMinute === "29"){
        convertedMinute = "Twenty-Nine"
    }
    else if(selectedMinute === "30"){
        convertedMinute = "Thirty"
    }
    else if(selectedMinute === "31"){
        convertedMinute = "Thirty-One";
    }
    else if(selectedMinute === "32"){
        convertedMinute = "Thirty-Two"
    }
    else if(selectedMinute === "33"){
        convertedMinute = "Thirty-Three"
    }
    else if(selectedMinute === "34"){
        convertedMinute = "Thirty-Four"
    }
    else if(selectedMinute === "35"){
        convertedMinute = "Thirty-Five"
    }
    else if(selectedMinute === "36"){
        convertedMinute = "Thirty-Six"
    }
    else if(selectedMinute === "37"){
        convertedMinute = "Thirty-Seven"
    }
    else if(selectedMinute === "38"){
        convertedMinute = "Thirty-Eight"
    }
    else if(selectedMinute === "39"){
        convertedMinute = "Thirty-Nine"
    }
    else if(selectedMinute === "40"){
        convertedMinute = "Forty"
    }
    else if(selectedMinute === "41"){
        convertedMinute = "Forty-One";
    }
    else if(selectedMinute === "42"){
        convertedMinute = "Forty-Two"
    }
    else if(selectedMinute === "43"){
        convertedMinute = "Forty-Three"
    }
    else if(selectedMinute === "44"){
        convertedMinute = "Forty-Four"
    }
    else if(selectedMinute === "45"){
        convertedMinute = "Forty-Five"
    }
    else if(selectedMinute === "46"){
        convertedMinute = "Forty-Six"
    }
    else if(selectedMinute === "47"){
        convertedMinute = "Forty-Seven"
    }
    else if(selectedMinute === "48"){
        convertedMinute = "Forty-Eight"
    }
    else if(selectedMinute === "49"){
        convertedMinute = "Forty-Nine"
    }
    else if(selectedMinute === "50"){
        convertedMinute = "Fifty"
    }
    else if(selectedMinute === "51"){
        convertedMinute = "Fifty-One";
    }
    else if(selectedMinute === "52"){
        convertedMinute = "Fifty-Two"
    }
    else if(selectedMinute === "53"){
        convertedMinute = "Fifty-Three"
    }
    else if(selectedMinute === "54"){
        convertedMinute = "Fifty-Four"
    }
    else if(selectedMinute === "55"){
        convertedMinute = "Fifty-Five"
    }
    else if(selectedMinute === "56"){
        convertedMinute = "Fifty-Six"
    }
    else if(selectedMinute === "57"){
        convertedMinute = "Fifty-Seven"
    }
    else if(selectedMinute === "58"){
        convertedMinute = "Fifty-Eight"
    }
    else if(selectedMinute === "59"){
        convertedMinute = "Fifty-Nine"
    }
  

    return (
        <div>
            <p>The current Military Time is: <strong>{convertedHour} {convertedMinute} Hours</strong></p>
            <br />
        </div>
    )
}