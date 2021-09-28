<?
        $to = 'vitya898989@gmail.com'; 
        $subject = 'Заявка на автокредит' .$_POST['Фамилия']. .$_POST['Имя']. .$_POST['Отчество'].;
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
								<style type="text/css">
									.subtitle { 
									font-size: 120%; 
									background-color: #6e7ff3;
									margin-bottom: 40px;
									}
									.row {
										display: flex;
										margin-bottom: 20px;
									}
									.row p {
										margin-right: 20px;
									}
								</style>
                    </head>
                    <body>
								<div class="wrapper">
									<h2 class="subtitle">Персональные данные заявителя:</h2>
									<div class="row">
											<p>Фамилия: '.$_POST['Фамилия'].'</p>
											<p>Имя: '.$_POST['Имя'].'</p>
											<p>Отчество: '.$_POST['Отчество'].'</p>
									</div>
									<div class="row">
											<p>Дата рождения: '.$_POST['Дата_рождения'].'</p>
									</div>	
								</div>					  		
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "vitya898989@gmail.com"; 
        mail($to, $subject, $message, $headers);

?>

