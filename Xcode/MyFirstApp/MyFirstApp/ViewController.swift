//
//  ViewController.swift
//  MyFirstApp
//
//  Created by Kento_E on 2018/01/01.
//  Copyright © 2018年 Kento_E. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var myLabel: UILabel!
    @IBAction func changeLabel(_ sender: Any) {
        myLabel.text = "You Changed Me!"
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

