export default {
	check,
	lookup,
};

var elements;

await loadPeriodicTable();


// ****************************

async function loadPeriodicTable() {
	elements = await (await fetch("periodic-table.json")).json();
}

function check(inputWord) {
	// TODO: determine if `inputWord` can be spelled
	// with periodic table symbols; return array with
	// them if so (empty array otherwise)

	return ["y","u","c","k"];
}

function lookup(elementSymbol) {
	elementSymbol.map((i)=>{
		if(i.symbol== elementSymbol)
		return i
	})
}
