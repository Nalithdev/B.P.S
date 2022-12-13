<?php
require_once 'doctype_template.php';
?>
<div class="devis_height">
<section class="devis">
    <h2>devis</h2>
    <form>
        <div class="first">
            <input type="text" placeholder="Nom">
            <input type="text" placeholder="Prénom">
            <input type="email" placeholder="E-mail">
        </div>
        <div class="second">
            <textarea name="text"></textarea>
            <input type="button" value="Envoyer">
        </div>

    </form>
</section>

<?php
require_once 'footer_template.php';
?>
</div>