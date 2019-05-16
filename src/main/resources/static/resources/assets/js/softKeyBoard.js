// JavaScript Document
var curPassWordInput;
var capsLockValue = 0;
var hideKeyBoard = true;
document.write("<div align=\"center\" id=\"softKeyBoard\" name=\"softKeyBoard\" style=\"position:absolute; left:0px; top:0px; z-index:180;display:none\"><div  moveArea=\"true\" style=\"text-align:right;border:1px solid #003399;background:#DCDCFF;font-size:12px;color:#3366FF;cursor:move;padding:2px;\"><INPUT type=hidden value=\"\" name=\"cmccpassWord\" id=\"cmccpassWord\"><INPUT id=useKey class=\"softkey_btn_input\" type=button value=\"使用键盘输入\" bgtype=\"1\" onclick=\"curPassWordInput.readOnly=0;curPassWordInput.focus();softFn.closeKeyBoard();curPassWordInput.value='';\"></div><div><table id=\"calcTable\" moveArea=\"true\" width=\"\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"\"><FORM id=calc name=calc action=\"\" method=post autocomplete=\"off\"><tr align=\"center\"><td align=\"center\" bgcolor=\"#FFFFFF\"><table align=\"center\" width=\"%\" border=\"0\" cellspacing=\"1\" cellpadding=\"0\"><tr align=\"left\" valign=\"middle\"> <td> <input type=button value=\" ~ \"></td><td> <input type=button value=\" ! \"></td><td> <input type=button value=\" @ \"></td><td> <input type=button value=\" # \"></td><td> <input type=button value=\" $ \"></td><td><input type=button value=\" % \"></td><td><input type=button value=\" ^ \"></td><td> <input type=button value=\" & \"></td><td><input type=button value=\" * \"></td><td><input type=button value=\" ( \"></td><td><input type=button value=\" ) \"></td><td><input type=button value=\" _ \"></td><td> <input type=button value=\" + \"></td><td><input type=button value=\" | \"></td><td colspan=\"1\" rowspan=\"2\"> <input name=\"button10\" type=button value=\" 退格\" onclick=\"softFn.setPassValue();\"  onDblClick=\"softFn.setPassValue();\" style=\"width:100px;height:40px\"> </td></tr><tr align=\"left\" valign=\"middle\"> <td><input type=button value=\" ` \"></td><td><input type=button bgtype=\"2\" id=\"button_number1\" name=\"button_number1\" value=\" 1 \"></td><td> <input type=button bgtype=\"2\" id=\"button_number2\" name=\"button_number2\" value=\" 2 \"></td><td> <input type=button bgtype=\"2\"  id=\"button_number3\" name=\"button_number3\" value=\" 3 \"></td><td> <input type=button bgtype=\"2\" id=\"button_number4\" name=\"button_number4\" value=\" 4 \"></td><td> <input type=button bgtype=\"2\" id=\"button_number5\" name=\"button_number5\" value=\" 5 \"></td><td> <input type=button bgtype=\"2\" id=\"button_number6\" name=\"button_number6\" value=\" 6 \"></td><td> <input type=button bgtype=\"2\" id=\"button_number7\" name=\"button_number7\" value=\" 7 \"></td><td> <input type=button bgtype=\"2\" id=\"button_number8\" name=\"button_number8\" value=\" 8 \"></td><td> <input type=button bgtype=\"2\" id=\"button_number9\" name=\"button_number9\" value=\" 9 \"></td><td> <input bgtype=\"2\"  id=\"button_number0\" name=\"button_number0\" type=button value=\" 0 \"></td><td> <input type=button value=\" - \"></td><td> <input type=button value=\" = \"></td><td> <input type=button value=\" \\ \"></td><td> </td></tr><tr align=\"left\" valign=\"middle\"> <td> <input type=button value=\" q \" id=\"button_letter_0\" name=\"button_letter_q\"></td><td> <input type=button value=\" w \" id=\"button_letter_1\" name=\"button_letter_w\"></td><td> <input type=button value=\" e \" id=\"button_letter_2\" name=\"button_letter_e\"></td><td> <input type=button value=\" r \" id=\"button_letter_3\" name=\"button_letter_r\"></td><td> <input type=button value=\" t \" id=\"button_letter_4\" name=\"button_letter_t\"></td><td> <input type=button value=\" y \" id=\"button_letter_5\" name=\"button_letter_y\"></td><td> <input type=button value=\" u \" id=\"button_letter_6\" name=\"button_letter_u\"></td><td> <input type=button value=\" i \" id=\"button_letter_7\" name=\"button_letter_i\"></td><td> <input type=button value=\" o \" id=\"button_letter_8\" name=\"button_letter_o\"></td><td> <input name=\"button8\" type=button value=\" p \" id=\"button_letter_9\" name=\"button_letter_p\"></td><td> <Input name=\"button9\" type=button value=\" { \"></td><td> <input type=button value=\" } \"></td><td> <input type=button value=\" [ \"></td><td> <input type=button value=\" ] \"></td><td><input name=\"button9\" type=button onClick=\"softFn.capsLockText();softFn.setCapsLock();\"  onDblClick=\"softFn.capsLockText();softFn.setCapsLock();\" value=\"切换大/小写\" style=\"width:100px;\"></td></tr><tr align=\"left\" valign=\"middle\"> <td> <input type=button value=\" a \" id=\"button_letter_10\" name=\"button_letter_a\"></td><td> <input type=button value=\" s \" id=\"button_letter_11\" name=\"button_letter_s\"></td><td> <input type=button value=\" d \" id=\"button_letter_12\" name=\"button_letter_d\"></td><td> <input type=button value=\" f \" id=\"button_letter_13\" name=\"button_letter_f\"></td><td> <input type=button value=\" g \" id=\"button_letter_14\" name=\"button_letter_g\"></td><td> <input type=button value=\" h \" id=\"button_letter_15\" name=\"button_letter_h\"></td><td> <input type=button value=\" j \" id=\"button_letter_16\" name=\"button_letter_j\"></td><td> <input name=\"button3\" type=button value=\" k \" id=\"button_letter_17\" name=\"button_letter_k\"></td><td> <input name=\"button4\" type=button value=\" l \" id=\"button_letter_18\" name=\"button_letter_l\"></td><td> <input name=\"button5\" type=button value=\" : \"></td><td> <input name=\"button7\" type=button value=\" &quot; \"></td><td> <input type=button value=\" ; \"></td><td> <input type=button value=\" ' \"></td><td rowspan=\"2\" colspan=\"2\"> <input name=\"button12\" type=button onclick=\"softFn.overInput();\" value=\"   确定  \" style=\"width:126px;height:42px;\"></td></tr><tr align=\"left\" valign=\"middle\"> <td><input name=\"button2\" type=button value=\" z \" id=\"button_letter_19\" name=\"button_letter_z\"></td><td> <input type=button value=\" x \" id=\"button_letter_20\" name=\"button_letter_x\"></td><td> <input type=button value=\" c \" id=\"button_letter_21\" name=\"button_letter_c\"></td><td> <input type=button value=\" v \" id=\"button_letter_22\" name=\"button_letter_v\"></td><td> <input type=button value=\" b \" id=\"button_letter_23\" name=\"button_letter_b\"></td><td> <input type=button value=\" n \" id=\"button_letter_24\" name=\"button_letter_n\"></td><td> <input type=button value=\" m \" id=\"button_letter_25\" name=\"button_letter_m\"></td><td> <input type=button value=\" &lt; \"></td><td> <input type=button value=\" &gt; \"></td><td> <input type=button value=\" ? \"></td><td> <input type=button value=\" , \"></td> <td> <input type=button value=\" . \"></td> <td> <input type=button value=\" / \"></td></tr></table></td></FORM></tr></table></div></div>");

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
var capsLockFlag = true;
var softKeyBoardFn = function () {
    this.pwInputFocus = function (obj) {
        var that = this;
        if (hideKeyBoard) {
            hideKeyBoard = false;
            curPassWordInput = obj;
            that.showKeyBoard();
            obj.readOnly = 0;
            Jid('cmccpassWord').value = '';
        }
    };
    this.pwInputChange = function (obj) {
        Jid('cmccpassWord').value = obj.value;
    };

    this.addValue = function (newValue) {
        if (capsLockValue == 0) {
            var str = Jid("cmccpassWord").value;
            if (str.length < curPassWordInput.maxLength) {
                Jid("cmccpassWord").value += newValue;
            }
            if (str.length <= curPassWordInput.maxLength) {
                curPassWordInput.value = Jid("cmccpassWord").value;
            }
        }
        else {
            var str = Jid("cmccpassWord").value;
            if (str.length < curPassWordInput.maxLength) {
                Jid("cmccpassWord").value += newValue;
            }
            if (str.length <= curPassWordInput.maxLength) {
                curPassWordInput.value = Jid("cmccpassWord").value;
            }
        }
    };
    this.setPassValue = function () {
        var longnum = Jid("cmccpassWord").value.length;
        var num;
        num = Jid("cmccpassWord").value.substr(0, longnum - 1);
        Jid("cmccpassWord").value = num;
        var str = Jid("cmccpassWord").value;
        curPassWordInput.value = Jid("cmccpassWord").value;
    };
    this.overInput = function () {
        var str = Jid("cmccpassWord").value;
        curPassWordInput.value = Jid("cmccpassWord").value;
        this.closeKeyBoard();
        Jid("cmccpassWord").value = "";
        curPassWordInput.readOnly = 0;
    };
    this.closeKeyBoard = function (theForm) {
        Jid("softKeyBoard").style.display = "none";
    };
    this.showKeyBoard = function () {
        this.randomNumberButton();
        this.randomLetterButton();
        if (document.documentElement.getBoundingClientRect) {
            var X = curPassWordInput.getBoundingClientRect().left + document.documentElement.scrollLeft + document.body.scrollLeft;
            var Y = curPassWordInput.getBoundingClientRect().top + document.documentElement.scrollTop + document.body.scrollTop;
            Jid("softKeyBoard").style.left = parseInt(X) + "px";
            Jid("softKeyBoard").style.top = (parseInt(Y) + 25) + "px";
        }
        Jid("softKeyBoard").style.display = "block";
        curPassWordInput.readOnly = 0;
        curPassWordInput.blur();
        Jid("useKey").focus();
    };
    this.setCapsLock = function () {
        if (capsLockValue == 0) {
            capsLockValue = 1;
        }
        else {
            capsLockValue = 0;
        }
    };
    this.setCalcBorder = function () {
        Jid("calcTable").style.border = "1px solid #B5ADF1"
    };
    this.setCalcButtonBg = function () {
        var that = this;
        for (var i = 0; i < Jid("calc").elements.length; i++) {
            if (Jid("calc").elements[i].type == "button" && Jid("calc").elements[i].getAttribute("bgtype") != "1") {
                if (Jid("calc").elements[i].getAttribute("bgtype") == "2") {
                    Jid("calc").elements[i].className = "softkey_btn_num";
                }
                else {
                    Jid("calc").elements[i].className = "softkey_btn_letter";
                }
                var thisButtonValue = Jid("calc").elements[i].value;
                thisButtonValue = thisButtonValue.trim();
                if (thisButtonValue.length == 1) {
                    Jid("calc").elements[i].onclick = function () {
                        var thisButtonValue = this.value;
                        thisButtonValue = thisButtonValue.trim();
                        that.addValue(thisButtonValue);
                    };

                    Jid("calc").elements[i].ondblclick = function () {
                        var thisButtonValue = this.value;
                        thisButtonValue = thisButtonValue.trim();
                        that.addValue(thisButtonValue);
                    };
                }
            }
        }
    };
    this.initCalc = function () {
        this.setCalcBorder();
        this.setCalcButtonBg();
    };
    this.capsLockText = function () {
        if (capsLockFlag) {
            for (var i = 0; i < Jid("calc").elements.length; i++) {
                var char = Jid("calc").elements[i].value;
                var char = char.trim();
                if (Jid("calc").elements[i].type == "button" && char >= "a" && char <= "z" && char.length == 1) {
                    Jid("calc").elements[i].value = " " + String.fromCharCode(char.charCodeAt(0) - 32) + " ";
                }
            }
        }
        else {
            for (var i = 0; i < Jid("calc").elements.length; i++) {
                var char = Jid("calc").elements[i].value;
                var char = char.trim();
                if (Jid("calc").elements[i].type == "button" && char >= "A" && char <= "Z" && char.length == 1) {
                    Jid("calc").elements[i].value = " " + String.fromCharCode(char.charCodeAt(0) + 32) + " ";
                }
            }
        }
        capsLockFlag = !capsLockFlag;
    };
    this.randomNumberButton = function () {
        var a = new Array(10);
        a[0] = 0; a[1] = 1; a[2] = 2; a[3] = 3; a[4] = 4; a[5] = 5; a[6] = 6; a[7] = 7; a[8] = 8; a[9] = 9;
        var randomNum;
        for (var i = 0; i < 10; i++) {
            randomNum = parseInt(Math.random() * 10);
            var tmp = a[0];
            a[0] = a[randomNum];
            a[randomNum] = tmp;
        }
        for (var i = 0; i < 10; i++) {
            Jid("button_number" + i).value = " " + a[i] + " ";
        }
    };
    this.randomLetterButton = function () {
        var a = new Array(26);
        a[0] = "q"; a[1] = "w"; a[2] = "e"; a[3] = "r"; a[4] = "t"; a[5] = "y"; a[6] = "u"; a[7] = "i"; a[8] = "o"; a[9] = "p";
        a[10] = "a"; a[11] = "s"; a[12] = "d"; a[13] = "f"; a[14] = "g"; a[15] = "h"; a[16] = "j"; a[17] = "k"; a[18] = "l";
        a[19] = "z"; a[20] = "x"; a[21] = "c"; a[22] = "v"; a[23] = "b"; a[24] = "n"; a[25] = "m";
        var randomLetter;
        for (var i = 0; i < 26; i++) {
            randomLetter = parseInt(Math.random() * 26);
            var tmp = a[0];
            a[0] = a[randomLetter];
            a[randomLetter] = tmp;
        }
        for (var i = 0; i < 26; i++) {
            Jid("button_letter_" + i).value = " " + a[i] + " ";
        }
    };
};
var softFn = new softKeyBoardFn();
function initSoftKeyBoard(bid, sid) {
    Jid(bid).onclick = function () {
        curPassWordInput = document.getElementById(sid);
        softFn.showKeyBoard();
        document.getElementById(sid).readOnly = 0;
        Jid('cmccpassWord').value = '';
    };
    Jid(bid).onKeyDown = function () {
        Jid('cmccpassWord').value = document.getElementById(sid).value;
    };
    document.getElementById(bid).onfocus = function () {
        softFn.pwInputFocus(document.getElementById(sid));
    };
    document.getElementById(bid).onchange = function () {
        softFn.pwInputChange(document.getElementById(sid));
        document.getElementById(sid).setAttribute("type", "password");
    };
    curPassWordInput = null;
    softFn.initCalc();
    JSWK.dragDiv();
}

