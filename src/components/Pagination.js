// import { ComponenteLista } from "./ComponenteLista";

       <div class="pagination">
      <Stack spacing={2}>
          <Pagination
            count={50}
            variant="outlined"
            color="primary"
            onClick={handlePagination}
          />
        </Stack>
      </div>
function handlePagination(){
    const handlePagination = async (e) => {
        var value = e.target.textContent;
        if (value == 1) {
            var newUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';
            var response = await getPokemonList(newUrl)
            var data = response.array;
            setPokemonData(data);
    
        } else {
            var newUrl =  `https:pokeapi.co/api/v2/pokemon?offset=${(value - 1) * 20}&limit=20`;
            var response = await getPokemonList(newUrl)
            var data = response.array;
            setPokemonData(data);
    
        }
    }
}
// export default handlePagination;