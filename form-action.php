<?
if((isset($_POST['name']))&&(isset($_POST['telephone']))){ 
        $to = 'syndikate96@yandex.ru'; 
        $subject = 'Заявка на автокредит';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
						  		<p>Марка авто: '.$_POST['car-brand'].'</p>
								<p>Модель: '.$_POST['car-model'].'</p>
								<p>Состояние: '.$_POST['condition'].'</p>
								<p>Продавец: '.$_POST['seller'].'</p>
								<p>Телефон: '.$_POST['telephone'].'</p>
								<p>Срок кредита: '.$_POST['credit-term'].' мес.</p>
								<p>Первоначальный взнос: '.$_POST['initial-fee'].' тыс. руб.</p>
                        <p>Имя: '.$_POST['name'].'</p>
								<p>Фамилия: '.$_POST['surname'].'</p>
								<p>Отчество: '.$_POST['patronymic'].'</p>
								<p>Серия паспорта: '.$_POST['serial'].'</p>
								<p>Номер паспорта: '.$_POST['number'].'</p>
								<p>Согласие на обработку данных: '.$_POST['politic'].'</p>
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "syndikate96@yandex.ru"; 
        mail($to, $subject, $message, $headers);
}
?>

