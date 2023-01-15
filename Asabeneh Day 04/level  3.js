const month = prompt(`Enter a month`);

if (month === `February`)
{
    alert (`${month} has 28 Days`);
}
else if(month===`January` || month === `March` || month === `May` || month === `July` || month === `August` || month === `October` || month === `December`)
{
    alert (`${month} has 31 days`)
}
else(alert(`${month} has 30 days`));