export default function TicketDetails () {
    function increaseValue() {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value;
      }
      
      function decreaseValue() {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('number').value = value;
      }

return(
    <><div className={styles["text"]}>
        <p>VÄLJE ANTAL BILJETTTER:</p>
    </div>
    <form>
            <div class={styles["value-button"]} id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>

            <input type="number" id="number" value="0" />
            <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
        </form><form>
            <div className={styles["value-button"]} id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
            <input type="number" id="number" value="0" />
            <div class={styles["value-button"]} id="increase" onclick="increaseValue()" value="Increase Value">+</div>
        </form><form>
            <div class={styles["value-button"]} id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
            <input type="number" id="number" value="0" />
            <div class={styles["value-button"]} id="increase" onclick="increaseValue()" value="Increase Value">+</div>
        </form></>

);


}