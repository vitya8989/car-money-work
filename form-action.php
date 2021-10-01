<?
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('car-money@car-money.com');
$mail->addAddress('syndikate96@yandex.ru'); 
$mail->Subject = 'Заявка на автокредит';
        $body = '<html>
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
        $mail->Body = $body;
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены';
	}
	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>

