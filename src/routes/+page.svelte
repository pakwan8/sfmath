<script lang="ts">
	import { Dropdown, DropdownItem, Helper, Input } from 'flowbite-svelte';
	import Equation from '../components/Equation.svelte';
	import { add, mul, div, addMul, addDiv, distrib } from '$lib/templates';
	import { random } from '$lib/number';

	const generators: { [key: string]: any } = {
		0: add,
		1: mul,
		2: div,
		3: addMul,
		4: addDiv,
		5: distrib
	}

	let inclusions: Array<number> = [0, 1, 2, 3, 4, 5];

	let ans: string;
	let addChecked: boolean = true;
	let mulChecked: boolean = true;
	let divChecked: boolean = true;
	let addMulChecked: boolean = true;
	let addDivChecked: boolean = true;
	let distribChecked: boolean = true;

	let prob = generators[random.choice(inclusions)](-25, 25);
	console.log(prob);
</script>

<html lang="en">
<div>
	<button class="h-[4vh] w-[8vw] min-w-[100px] text-white rounded-br-2xl bg-gradient-to-br from-blue-600 to-blue-800">Settings</button>
	<Dropdown class="w-50 p-3 space-y-1 text-sm">
		<DropdownItem class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<input id="add" type="checkbox" class="focus:ring-transparent" bind:checked={addChecked} on:change={() => {
				addChecked === true ? inclusions.push(0) : inclusions.splice(inclusions.indexOf(0), 1);
				if (inclusions.length < 1) {
					inclusions.push(0);
					addChecked = true;
				}
			}} />
			<label for="add">&nbsp;Addition</label>
			<Helper class="ps-6">n + a = b<br>(a, b, n ∈ &#8484;)</Helper>
		</DropdownItem>
		<DropdownItem class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<input id="mul" type="checkbox" class="focus:ring-transparent" bind:checked={mulChecked} on:change={() => {
				mulChecked === true ? inclusions.push(1) : inclusions.splice(inclusions.indexOf(1), 1);
				if (inclusions.length < 1) {
					inclusions.push(1);
					mulChecked = true;
				}
			}}>
			<label for="mul">&nbsp;Multiplication</label>
			<Helper class="ps-6">n × a = b<br>(a, b, n ∈ &#8484;)</Helper>
		</DropdownItem>
		<DropdownItem class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<input id="div" type="checkbox" class="focus:ring-transparent" bind:checked={divChecked} on:change={() => {
				divChecked === true ? inclusions.push(2) : inclusions.splice(inclusions.indexOf(2), 1);
				if (inclusions.length < 1) {
					inclusions.push(2);
					divChecked = true;
				}
			}}>
			<label for="div">&nbsp;Division</label>
			<Helper class="ps-6">n / a = b<br>(a, b, n ∈ &#8484;)</Helper>
		</DropdownItem>
		<DropdownItem class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<input id="addmul" type="checkbox" class="focus:ring-transparent" bind:checked={addMulChecked} on:change={() => {
				addMulChecked === true ? inclusions.push(3) : inclusions.splice(inclusions.indexOf(3), 1);
				if (inclusions.length < 1) {
					inclusions.push(3);
					addMulChecked = true;
				}
			}}>
			<label for="addmul">&nbsp;Add + Multiply</label>
			<Helper class="ps-6">n × a + b = c<br>(a, b, c, n ∈ &#8484;)</Helper>
		</DropdownItem>
		<DropdownItem class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<input id="adddiv" type="checkbox" class="focus:ring-transparent" bind:checked={addDivChecked} on:change={() => {
				addDivChecked === true ? inclusions.push(4) : inclusions.splice(inclusions.indexOf(4), 1);
				if (inclusions.length < 1) {
					inclusions.push(4);
					addDivChecked = true;
				}
			}}>
			<label for="adddiv">&nbsp;Add + Divide</label>
			<Helper class="ps-6">(n + a) / b = c<br>(a, b, c, n ∈ &#8484;)</Helper>
		</DropdownItem>
		<DropdownItem class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<input id="distrib" type="checkbox" class="focus:ring-transparent" bind:checked={distribChecked} on:change={() => {
				distribChecked === true ? inclusions.push(5) : inclusions.splice(inclusions.indexOf(5), 1);
				if (inclusions.length < 1) {
					inclusions.push(5);
					distribChecked = true;
				}
			}}>
			<label for="distrib">&nbsp;Distribution</label>
			<Helper class="ps-6">a(n + b) = c<br>(a, b, c, n ∈ &#8484;)</Helper>
		</DropdownItem>
	</Dropdown>
</div>
<div id="eq" class="centered">
	<Equation eq={prob.equation} />
</div>
<div id="ans" class="centered">
	<label for="ansInput">
		<Equation eq={`${prob.variable}=`} />&nbsp;
	</label>
	<Input id="ansInput" class="w-75" bind:value={ans} on:keydown={(e) => {
			if (e.key === "Enter" && ans !== "") {
				if (ans === prob.ans.toString()) {
					alert(true);
					prob = generators[random.choice(inclusions)](-25, 25);
					ans = "";
					console.log(prob);
				} else {
					alert(false);
				}
			}
    }} type="number">
	</Input>
</div>
<br />
<div class="centered">
	<div id="buttons">
		<button class="h-[5vh] w-[20vw] text-white rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800" on:click={() => {
			prob = generators[random.choice(inclusions)](-25, 25);
			ans = "";
			console.log(prob);
		}}>Generate
		</button>
		<button class="h-[5vh] w-[20vw] text-white rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800" on:click={() => {
			if (ans !== "") {
				if (ans === prob.ans.toString()) {
					alert(true);
					prob = generators[random.choice(inclusions)](-25, 25);
					ans = "";
					console.log(prob);
				} else {
					alert(false);
				}
			}
		}}>Check
		</button>
	</div>
</div>
</html>

<style>
    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    #eq {
        height: 20vh;
        font-size: clamp(2em, 4em, 3em);
    }

    #ans {
        display: flex;
        flex-direction: row;
        font-size: clamp(2em, 4em, 3em);
    }

    #buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 42.5vw;
    }
</style>
