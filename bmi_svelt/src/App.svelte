<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import TailwindCss from "./TailwindCSS.svelte";

  let weight: number;
  let height: number;
  let answer: string = "";

  const calculateBmi = () => {
    let bmi: number = weight / (height * height);
    answer = `Seu bmi é ${bmi.toFixed(2)}`;
  };
</script>

<TailwindCss />

<div
  class="flex  flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50"
>
  <div class="items-center justify-center ">
    <a href="/">
      <h3
        class="text-center items-center sm:justify-center text-4xl font-bold text-purple-600"
      >
        BMI
      </h3>
    </a>

    <div
      class="w-full px-10 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg grid place-items-center"
    >
      <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class=" rounded-lg pr-1"> Altura: </label>
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type="text"
            placeholder="Altura..."
            bind:value={height}
          />
        </div>
        <div class="md:flex md:items-center mb-6">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="pr-1 rounded-lg"> Peso: </label>

          <input
            type="text"
            placeholder="Peso..."
            bind:value={weight}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
      </form>
      <button
        class="w-full px-10 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        on:click={calculateBmi}>Calculate</button
      >
      <p class="grid px-5 py-5   place-items-center text-purple-600 font-bold">
        {answer || ""}
      </p>
    </div>
  </div>
</div>
