// Плавное появление подтверждения и скрытие формы с анимацией

document
	.getElementById("booking-form")
	.addEventListener("submit", function (e) {
		e.preventDefault();

		const form = document.getElementById("booking-form");
		const confirmation = document.getElementById("confirmation");

		form.style.transition = "opacity 0.5s";
		form.style.opacity = "0";

		setTimeout(() => {
			form.style.display = "none";
			confirmation.classList.remove("hidden");
			confirmation.style.opacity = "0";
			confirmation.style.transition = "opacity 0.5s";
			setTimeout(() => {
				confirmation.style.opacity = "1";
			}, 10);
		}, 500);
	});


	document
		.getElementById("booking-form")
		.addEventListener("submit", async function (e) {
			e.preventDefault();

			const name = document.getElementById("name").value.trim();
			const email = document.getElementById("email").value.trim();

			if (!name || !email) {
				alert("Пожалуйста, заполните все поля.");
				return;
			}

			const token = "6323278151:AAEClrpfe-BFsYJrjQBdIMRFPtdUJLIEnGo"; // твой токен
			const chat_id = "-4872504597"; // твой чат id

			const message = `\u2709\ufe0f Новая заявка:\n\n\ud83d\udc64 Имя: ${name}\n\ud83d\udce7 Email: ${email}`;
			const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
				message
			)}`;

			try {
				const response = await fetch(url);
				const data = await response.json();

				if (data.ok) {
					document.getElementById("confirmation").classList.remove("hidden");
					this.reset();
				} else {
					alert("Ошибка отправки: " + data.description);
				}
			} catch (error) {
				alert("Ошибка сети: " + error.message);
			}
		});
	
		document.addEventListener("DOMContentLoaded", () => {
			const scrollElements = document.querySelectorAll(".scroll-fade");

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("visible");
							observer.unobserve(entry.target); // Однократный эффект
						}
					});
				},
				{
					threshold: 0.2,
				}
			);

			scrollElements.forEach((el) => observer.observe(el));
		});