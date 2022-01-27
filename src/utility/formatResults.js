let _ = require("lodash");

/** Return row for html table **/
function formatResults(funcName, inputStr, idealOutput, output) {
    const ok = _.isEqual(output, idealOutput);
    return `<tr>
            <td>${funcName}${inputStr} → ${idealOutput}</td>
            <td>${output}</td>
            <td style="text-align: center; color:${ok ? '#D5FF80' : '#FF6666'}">${ok ? '✔' : '✖'}</td>
        </tr>`;
}

module.exports = formatResults;