<script lang="ts">
    import { Input, Dropdown, Helper } from 'flowbite-svelte';
    import Equation from '../components/Equation.svelte';
    import { test } from '$lib/templates';

    let iterations: number = 3;
    let divChance: number = 30;

    let ans: string;
</script>

<html lang="en">
<div>
    <button class="h-[4vh] w-[5vw] text-white rounded-br-2xl bg-gradient-to-br from-blue-600 to-blue-800">Settings</button>
    <Dropdown class="bg-gray-100 w-60 p-3 space-y-1 text-sm rounded-r-lg">
      <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Input placeholder="Iterations" bind:value={iterations}></Input>
        <Helper class="pt-0.1 pl-0.5">How many modifications to make to the base. (Max 15)</Helper>
      </li>
      <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Input placeholder="Chance" bind:value={divChance}></Input>
        <Helper class="pt-0.1 pl-0.5">Chance for a division to occur. (Range 0-100)</Helper>
      </li>
    </Dropdown>
</div>
<div id="eq" class="centered">
    <Equation eq={"a=bx^2"}/>
</div>
<div id="ans" class="centered">
    <label for="ansInput">
        <Equation eq={"a="}/>&nbsp;
    </label>
    <Input id="ansInput" class="w-75" bind:value={ans} on:keydown={(e) => {
        if (e.key === "Enter" && ans !== "") {
            alert("Input entered");
        }
    }} type="number">
    </Input>
</div>
<br/>
<div class="centered">
    <div id="buttons">
        <button class="h-[5vh] w-[20vw] text-white rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800" on:click={() => {
				test();
		}}>Generate (Run test)
        </button>
        <button class="h-[5vh] w-[20vw] text-white rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800" on:click={() => {
			if (ans !== "") {
				alert("check");
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
