import { useEffect, useState } from "react";

import { faBars, faXmark } from "@awesome.me/kit-d5b9232d46/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "radix-ui";
import { useLocation } from "react-router-dom";

import Navigation from "@/components/Navigation";
import "./NavigationDialog.scss";

const NavigationDialog = function () {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setOpen(false);
	}, [location]);

	return (
		<div className="nav-dialog">
			<Dialog.Root open={open} onOpenChange={setOpen}>
				<Dialog.Trigger asChild>
					<button
						type="button"
						className="nav-dialog__action nav-dialog__action--trigger"
						aria-label="Open navigation menu"
					>
						<FontAwesomeIcon className="nav-dialog__icon" icon={faBars} />
					</button>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className="nav-dialog__overlay" />
					<Dialog.Content className="nav-dialog__content">
						<header className="nav-dialog__header fb-col-wrapper">
							<Dialog.Close asChild>
								<button
									type="button"
									className="nav-dialog__action nav-dialog__action--close"
									aria-label="Close navigation menu"
								>
									<FontAwesomeIcon className="nav-dialog__icon" icon={faXmark} />
								</button>
							</Dialog.Close>
						</header>
						<Navigation />
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
};

export default NavigationDialog;
