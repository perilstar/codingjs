let _ = require("lodash");

/** Return row for html table **/
function formatResults(funcName, inputStr, idealOutput, output) {
    const ok = _.isEqual(output, idealOutput);
    return `<tr>
            <td>${funcName}${inputStr} → ${idealOutput}</td>
            <td>${output}</td>
            <td class="center-text"><span class="answer ${ok ? "correct" : "incorrect"}">${ok ? '✔' : '✖'}</span></td>
        </tr>`;
}

module.exports = formatResults;