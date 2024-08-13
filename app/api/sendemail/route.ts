import nodemailer from 'nodemailer';

type typeMensagem = {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
};

export async function POST(request: Request) {
  const res: typeMensagem = await request.json();
  const htmlMsg = `<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0C212D; border: 1px solid #ddd; border-radius: 10px;">
    <div style="text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #fff; ">
      Você Recebeu uma Mensagem!
    </div>
    <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 20px; width: 100%;">
        <div style="width: 30%;">
          <strong>Nome:</strong> ${res.nome}
        </div>
        <div style="width: 30%;">
          <strong>Telefone:</strong> ${res.telefone}
        </div>
        <div style="width: 30%;">
          <strong>Email:</strong> ${res.email}
        </div>
      </div>
      <div style="margin-top: 20px;">
        <strong>Mensagem:</strong> ${res.mensagem}
      </div>
    </div>
  </div>
</body>

</html>`;
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GOOGLE_EMAIL,
      pass: process.env.GOOGLE_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GOOGLE_EMAIL,
    to: process.env.GOOGLE_EMAIL,
    subject: 'SITE | Você Recebeu uma Mensagem!', // Subject line
    html: htmlMsg, // plain text body
  };

  try {
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
