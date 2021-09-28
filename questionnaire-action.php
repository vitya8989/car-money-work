<?
        $to = 'vitya898989@gmail.com'; 
        $subject = 'Заявка на автокредит';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
								<style type="text/css">
									.subtitle { 
									font-size: 120%; 
									background-color: #6e7ff3;
									margin-bottom: 10px;
									color: #ffffff;
									}
									.row {
										display: flex;
										margin-bottom: 5px;
										flex-wrap: wrap;
									}
									.row p {
										margin-right: 20px;
										padding: 10px;
										border: 1px solid #cccccc;
										border-radius: 10px;
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
											<p>Место рождения: '.$_POST['Место_рождения'].'</p>
											<p>СНИЛС: '.$_POST['СНИЛС'].'</p>
									</div>	
									<div class="row">
											<p>ИНН: '.$_POST['ИНН'].'</p>
											<p>Прежние ФИО (в случае, если менялись): '.$_POST['Прежние_ФИО'].'</p>
											<p>Номер телефона: '.$_POST['telephone'].'</p>
									</div>
									<div class="row">
											<p>Контактное лицо: '.$_POST['ФИО_контакт'].'</p>
											<p>Телефон контактного лица: '.$_POST['Телефон_контакт'].'</p>
									</div>
									<h2 class="subtitle">Паспорт:</h2>
									<div class="row">
											<p>Серия: '.$_POST['Серия'].'</p>
											<p>Номер: '.$_POST['Номер'].'</p>
											<p>Дата выдачи: '.$_POST['Дата_выдачи'].'</p>
											<p>Кем выдан: '.$_POST['Кем_выдан'].'</p>
									</div>
									<h2 class="subtitle">Адрес постоянной регистрации (адрес места
										жительства (регистрации)):</h2>
									<div class="row">
										<p>Город: '.$_POST['Город_ПП'].'</p>
										<p>Населенный пункт: '.$_POST['Населенный_пункт_ПП'].'</p>
										<p>Регион: '.$_POST['Регион_ПП'].'</p>
									</div>
									<div class="row">
										<p>Улица: '.$_POST['Улица_ПП'].'</p>
										<p>Дом: '.$_POST['Дом_ПП'].'</p>
										<p>Строение, корпус: '.$_POST['Корпус_ПП'].'</p>
										<p>Квартира: '.$_POST['Квартира_ПП'].'</p>
									</div>
									<h2 class="subtitle">Адрес фактического проживания (адрес места
										пребывания):</h2>
									<div class="row">
										<p>Совпадает с адресом постоянной
											регистрации: '.$_POST['ФП_совпадает'].'</p>
										<p>Город: '.$_POST['Город_ФП'].'</p>
										<p>Населенный пункт: '.$_POST['Населенный пункт_ФП'].'</p>
										<p>Регион: '.$_POST['Регион_ФП'].'</p>
									</div>
									<div class="row">
										<p>Улица: '.$_POST['Улица_ФП'].'</p>
										<p>Дом: '.$_POST['Дом_ФП'].'</p>
										<p>Строение, корпус: '.$_POST['Корпус_ФП'].'</p>
										<p>Квартира: '.$_POST['Квартира_ФП'].'</p>
									</div>
									<div class="row">
										<p>Срок проживания по фактическому адресу: '.$_POST['Срок_ФП'].'</p>
									</div>
									<h2 class="subtitle">Статус недвижимости по месту проживания:
									</h2>
									<div class="row">
										<p>'.$_POST['Статус_ФП'].'</p>
									</div>
								</div>					  		
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= ""; 
        mail($to, $subject, $message, $headers);

?>

