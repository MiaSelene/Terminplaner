<?php
$Name = $_REQUEST["Name"];
$Name = str_replace(" ", "_", $Name);
$ID = $_REQUEST["ID"];
$Line = $_REQUEST["Line"];
$result = shell_exec("python Test.py " . $Name." ". $ID." ".$Line);
?>